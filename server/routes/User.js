const express = require('express');
const router = express.Router();
const gchat = require('../models/gchat');
const user = require('../models/user');
const com = require('../models/com');
const comuser = require('../models/comuser');

router.get('/comchat/:cid/:curlen',async (req,res)=>{
    try {
        const {cid,curlen}=req.params;
        const snum = await gchat.count({cid});
        if(snum<=curlen){
            const chats = [];
            res.json({status:"ok",chats});
        }else{
            const chats = await gchat.find({cid}).sort({created_at:-1}).skip(curlen).limit(10);
            res.json({status:"ok",chats});
        }
    } catch (error) {
        res.json({status:"server eror"});
    }
})

router.delete('/comchat/:chid',async (req,res)=>{
    try {
        await gchat.findByIdAndDelete(req.params.chid);
        res.json({status:"ok"})
    } catch (error) {
        res.json({status:"server eror"+error});
    }
})

router.post('/comdeletechat',async (req,res)=>{
    try {
        const {sid,msg,room,name}=req.body;
        const chat =await gchat.find({sid,cid:room,name,msg}).sort({'created_at':-1}).limit(1);
        const id = chat._id;
        await gchat.findByIdAndDelete(id);
        res.json({status:'ok',chat});
    } catch (error) {
        res.json({status:'error'});
    }
})

router.get('/getcom/:uid',async (req,res)=>{
    try {
        // const cids = await gchat.find({sid:req.params.uid}).select("cid ").distinct("cid");
        const coms = await comuser.find({uid:req.params.uid}).select("cid -_id").distinct("cid");
        const dt = await com.find({_id:{ $in: coms}}).select("_id name des");
        res.json({status:"ok",dt})
    } catch (error) {
        res.json({status:"server eror"});
    }
})

router.get('/getchatlength/:cid',async (req,res)=>{
    try {
        const {cid}=req.params;
        const length = await gchat.count({cid});
        res.json({status:"ok",length});
    } catch (error) {
        res.json({status:"server eror"});
    }
})

router.post('/createuser',async (req,res)=>{
    try {
        const {name,email,age,bg,ttype,password,pincode,address,des}=req.body;
        const us = await user.create({
            name,
            email,
            age,
            bg,
            ttype,
            password,
            pincode,
            address,
            coms:0,
            des,
        })
        const pinc = pincode.substring(0,3);
        const comname = "com"+pinc;
        // child,tinager,adult,older;
        let ag;
        if(age<=12){
            ag = "child"
        }else if(age<=17){
            ag = "teenager"
        }else if(age<=64){
            ag = "adult"
        }else{
            ag = "older"
        }
        const comu = await com.findOne({name:comname,agegroup:ag});
        if(comu){
            await comuser.create({
                cid: comu._id,
                uid: us._id
            })
        }else{
            const newcom = await com.create({
                name:comname,
                des:"Community for "+ag+" near their region "+pincode,
                ttype: "Minor",
                agegroup:ag,
                memebers:1
            })
            await comuser.create({
                cid: newcom._id,
                uid: us._id
            })
        }
        if(us){res.json({status:'ok'})}
        else{res.json({status:'user already exists'})}
    } catch (error) {
        res.json({status:"server eror "+JSON.stringify(error)});
    }
})

router.post('/loginuser',async (req,res)=>{
    try {
        const {email,password}=req.body;
        const us =await user.findOne({email,password}).select("-password");
        if(us){
            res.json({status:"ok",user:us});
        }else{
            res.json({status:"invalid id or password"});
        }
    } catch (error) {
        
    }
})

router.post('/createcom',async (req,res)=>{
    try {
        const {name,des,ttype,agegroup}=req.body;
        const cm = await com.create({
            name,
            des,
            ttype,
            agegroup,
            memebers:0
        })
        cm?res.json({status:'ok'}):res.json({status:"server Error"});
    } catch (error) {
        res.json({status:"server eror"});
    }
})

router.post('/addmember',async (req,res)=>{
    try {
        const {cid,uid}=req.body;
        const cm = await comuser.create({
            cid,
            uid
        })
        cm?res.json({status:'ok'}):res.json({status:"server Error"});
    } catch (error) {
        res.json({status:"server eror"});
    }
})


module.exports =router;