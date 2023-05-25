import React, { useContext, useEffect, useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { Link,useNavigate } from "react-router-dom";
import { MyContext } from '../App'

const Login = () => {
    const nav =useNavigate();
    const {setUser,backend,setIslogin}=useContext(MyContext);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handlesubmit = async (e)=>{
        e.preventDefault()
        const res = await fetch(`${backend}/loginuser`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const dt = await res.json();
        if(dt.status=="ok"){
            setUser(dt.user);
            setIslogin(true);
            window.localStorage.setItem("1234", JSON.stringify(dt.user));
            nav("/");
        }else{
            alert(dt.status);
            setIslogin(false);
            setUser(null);
        }
    }
    const checklogin=()=>{
        const dt =JSON.parse(window.localStorage.getItem("1234"));
        if(dt){
            setUser(dt);
            setIslogin(true);
            nav("/");
        }
    }
    useEffect(()=>{
        checklogin();
    },[])
    return (
        <>
            <section className="signup">
                <div className="wrapper}">
                    <form onSubmit={handlesubmit} className="form">
                        <div className="title">
                            <div className="line"></div>
                            <div className="uline">
                                Welcome back to <span className="org">ThalaSmile</span>
                            </div>
                        </div>
                        <label htmlFor="">UserId:</label>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="">Password:</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <span className="forgot_pass"><Link to="/Signup" className="login_link">forgot password?</Link></span>
                        <div className="btn_log">
                            <button className="subtn" type='submit'>
                                <LoginIcon />
                                Sign In
                            </button>
                        </div>
                        <span className="login_que">don't have an account? <Link to="/signup" className="login_link">Sign Up</Link></span>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login