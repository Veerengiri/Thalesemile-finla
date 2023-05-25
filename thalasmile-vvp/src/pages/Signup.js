import React, { useContext, useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from "react-router-dom";
import { BackdropRoot } from '@mui/material';
import { MyContext } from '../App';

const Login = () => {
    const bloadgroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const thalasemiatypes = ["Minor","Intermedia","Major"];
    const [first,setFirst]=useState(true);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cp,setCp]=useState("");
    const [pincode,setPincode]=useState("");
    const [address,setAddress]=useState("");
    const [ttype,setTtype]=useState("");
    const [bg,setBg]=useState("");
    const {backend}=useContext(MyContext);
    const nav = useNavigate();
    
    const handelsubmit= async (e)=>{
        
        e.preventDefault();
        setAge( parseInt(age) );
        if(name=="" || email=="" || password==""|| cp==""||pincode==""||address==""||ttype==""||bg=="" ||age==""){
            alert("invalid credentials");
            return;
        }
        if(cp!=password){
            alert("password not matched...");
            return;
        }
        if(age>=100){
            alert("age must be less than 100");
            return;
        }
        if(pincode.length!=6 || !(/^\d/.test(pincode))){
            alert("invalid pincode");
            return
        }
        const res = await fetch(`${backend}/createuser`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                // const {name,email,age,bg,ttype,password,pincode,address,des}=req.body;
                name,
                email,
                age,
                bg,
                ttype,
                password,
                pincode,
                address,
                des: "this is "+name
            })
        })
        const dt = await res.json();
        if(dt.status=="ok"){
            nav("/signin");
        }
    }
    return (
        <>
            <section className="signup" >
                <div className="wrapper" style={{margin:"50px"}}>
                    <form onSubmit={handelsubmit} className="">
                        {first && <div className='form'>
                            <div className="title">
                                <div className="line"></div>
                                <div className="uline">
                                    Welcome to <span className="org">ThalaSmile</span>
                                </div>
                            </div>
                            <label htmlFor="">Username:</label>
                            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                            <label htmlFor="">Email:</label>
                            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            <label htmlFor="">Password:</label>
                            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            <label htmlFor="">Confirm Password:</label>
                            <input type="password" value={cp} onChange={(e)=>{setCp(e.target.value)}}/>
                            <label htmlFor="">Age:</label>
                            <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                            <div className="btn_log">
                                <button className="subtn" onClick={()=>{setFirst(false)}}>
                                    <LoginIcon />
                                    Proceed
                                </button>
                            </div>
                            <span className="login_que">already have an account? <Link to="/signin" className="login_link">Sign In</Link></span>
                        </div>}
                        {!first && <div className='form'>
                            <div className="title">
                                <div className="line"></div>
                                <div className="uline">
                                    Welcome to <span className="org">ThalaSmile</span>
                                </div>
                            </div>
                            <label>Pincode:</label>
                            <input type="text" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/>
                            <label>Address</label>
                            <input type="text" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                            <label>Bload Group:</label>
                            <select name="countries" onChange={(e)=>setBg(e.target.value)}>
                                <option value="-1">select you Bload Group</option>
                                {bloadgroups.map((bg)=>{
                                    return <option value={bg}>{bg}</option>
                                })}
                            </select>
                            <label>Thalasemia Type:</label>
                            <select name="countries" onChange={(e)=>{setTtype(e.target.value)}}>
                                <option value="-1">select you Thalasemia type</option>
                                {thalasemiatypes.map((tt)=>{
                                    return <option value={tt}>{tt}</option>
                                })}
                            </select>
                            <div className="btn_log" >
                                <button className="subtn" type='submit'>
                                    <LoginIcon />
                                    Sign Up
                                </button>
                                <button className="subtn" onClick={()=>{setFirst(true)}}>
                                    Back
                                </button>
                            </div>
                            <span className="login_que">already have an account? <Link to="/signin" className="login_link">Sign In</Link></span>
                        </div>}
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login