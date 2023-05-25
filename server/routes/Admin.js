const express = require('express');
const blog = require('../models/blog');
const event = require('../models/event');
const camp = require('../models/camp');
const user = require('../models/user');
const admin = require('../models/admin');

const router = express.Router();




router.post("/createblog",async (req,res)=>{
    try {
        const {author,title,desc,dp}=req.body;
        const bg = await blog.create({
            author,title,desc,dp
        })
        if(bg){res.json({status:'ok',bg})}
        else{res.json({status:"server error"})}
    } catch (error) {
        res.json({status:"server error"})
    }
})
router.get("/getblog/:curlenth",async (req,res)=>{
    try {
        const {curlenth}=req.params;
        const blogs = await blog.find().sort({updated_at:-1}).skip(curlenth).limit(4);
        if(blogs.length==0){
            res.json({status:"end"});
        }else{
            res.json({status:"ok",blogs});
        }
        
    } catch (error) {
        res.json({status:'error'});
    }
})
router.delete("/deleteblog/:bid",async (req,res)=>{
    try {
        const {bid}=req.params;
        await blog.findByIdAndDelete(bid);
        res.json({status:"ok"});
    } catch (error) {
        res.json({status:"server error"});
    }
})
router.post("/createEvent",async (req,res)=>{
    try {
        const {admin,name,des,dp,address,date}=req.body;
        const hil = await event.create({
            admin,
            name,
            des,
            dp,
            address,
            date,
        })
        if(hil){res.json({status:"ok",event:hil})}
        else{res.json({status:"event Not created"})}
    } catch (error) {
        res.json({status:"error"});
    }
})
router.get('/getevents/:curevents',async (req,res)=>{
    try {
        const {curevents}=req.params;
        const allev = await event.find().sort({created_at:-1}).skip(curevents).limit(6);
        if(allev.length==0){
            res.json({status:"end"});
        }else{
            res.json({status:"ok",events:allev});
        }
    } catch (error) {
        res.json({status:"error"});
    }
})
router.delete("/deleteevent/:eid",async (req,res)=>{
    try {
        const dl = await event.findByIdAndDelete(req.params.eid);
        if(dl){
            res.json({status:"ok"});
        }else{
            res.json({status:"not deleted..."});
        }
    } catch (error) {
        res.json({status:"server Error"});
    }
})
router.post("/createcamp",async (req,res)=>{
    try {
        const {admin,address,date,dp,des}=req.body;
        const dt = await camp.create({
            admin,
            address,
            des,
            date,
            dp
        })
        if(dt){res.json({status:"ok"})}
        else{res.json({status:"camp not crated"})}
    } catch (error) {
        res.json({status:"server error"});
    }
})
router.delete('/removecamp/:campId',async (req,res)=>{
    try {
        const dt = await camp.findByIdAndDelete(req.params.campId);
        if(dt){res.json({status:"ok"})}
        else{res.json({status:"camp not deleted"})}
    } catch (error) {
        res.json({status:"server error"});
    }
})
router.get('/getcamps/:curlen',async (req,res)=>{
    try {
        const {curlen}=req.params;
        const allev = await camp.find().sort({created_at:-1}).skip(curlen).limit(6);
        if(allev.length==0){
            res.json({status:"end"});
        }else{
            res.json({status:"ok",events:allev});
        }
    } catch (error) {
        res.json({status:"error"});
    }
})
router.post('/createAdmin',async (req,res)=>{
    try {
        const {email,password,name}=req.body;
        const ad = await admin.create({
            name,
            email,
            password,
        })
        if(ad){
            res.json({status:'ok'})
        }else{
            res.json({status:'not craeted'})
        }
        
    } catch (error) {
        res.json({status:"error"});
    }
})
router.post('/loginAdmin',async (req,res)=>{
    try {
        const {email,password}=req.body;
        const ad = await admin.findOne({
            email,
            password,
        })
        if(ad){
            res.json({status:'ok',admin:ad});
        }else{
            res.json({status:'not craeted'})
        }
        
    } catch (error) {
        res.json({status:"error"});
    }
})

router.get("/getRegisterUserdata",async (req,res)=>{
    try {
        const totaldt = await user.find().select("-password");
        res.json({status:"ok",users:totaldt});
    } catch (error) {
        res.json({status:'error'});
    }
})
router.get('/regUserChart',async (req,res)=>{
    try {
        const totaldt = await user.find().select("-password");
        let newdt = [];
        const yearnow = new Date().getFullYear();
        totaldt.forEach(us => {
            let dt = new Date(us.created_at);
            let month = dt.getMonth()+1;
            let year = dt.getFullYear();
            let {id}=us;
            if(yearnow==year){
                newdt.push({id,month});
            }
        });
        let findnew =[];
        let curmon = new Date().getMonth()+1;
        
        for(let i=1;i<=curmon;i++){
            let num =0;
            newdt.forEach(el => {
                if(el.month==i){
                    num++;
                }
            });
            findnew.push({month:i,users:num});
        }
        res.json({status:"ok",users:findnew});
    } catch (error) {
        res.json({status:'error'});
    }
})
router.get('/geteventchart',async (req,res)=>{
    try {
        const totaldt = await event.find();
        let newdt = [];
        const yearnow = new Date().getFullYear();
        totaldt.forEach(us => {
            let dt = new Date(us.created_at);
            let month = dt.getMonth()+1;
            let year = dt.getFullYear();
            let {id}=us;
            if(yearnow==year){
                newdt.push({id,month});
            }
        });
        let findnew =[];
        let curmon = new Date().getMonth()+1;
        
        for(let i=1;i<=curmon;i++){
            let num =0;
            newdt.forEach(el => {
                if(el.month==i){
                    num++;
                }
            });
            findnew.push({month:i,users:num});
        }
        res.json({status:"ok",users:findnew});
    } catch (error) {
        res.json({status:'error'});
    }
})
router.get('/getActiveChart',async (req,res)=>{
    try {
        const totaldt = await user.find();
        let newdt = [];
        const yearnow = new Date().getFullYear();
        totaldt.forEach(us => {
            let dt = new Date(us.updated_at);
            let month = dt.getMonth()+1;
            let year = dt.getFullYear();
            let {id}=us;
            if(yearnow==year){
                newdt.push({id,month});
            }
        });
        let findnew =[];
        let curmon = new Date().getMonth()+1;
        
        for(let i=1;i<=curmon;i++){
            let num =0;
            newdt.forEach(el => {
                if(el.month==i){
                    num++;
                }
            });
            findnew.push({month:i,users:num});
        }
        res.json({status:"ok",users:findnew});
    } catch (error) {
        res.json({status:'error'});
    }
})
module.exports =router;