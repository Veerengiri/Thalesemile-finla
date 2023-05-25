import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/ArtistSignIn.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { MyContext } from "../Fixed/App";

const ArtistSignIn = () => {
  const {backend,setIslogin,setAdmin}=useContext(MyContext);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const nav = useNavigate();
  const handlelogin = async (e)=>{
    e.preventDefault();
    if(email==""|| password==""){
      alert("invalid credentials");
      return;
    }
    const log = await fetch(`${backend}/loginAdmin`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const res = await log.json();
    if(res.status=="ok"){ 
      setAdmin(res.admin);
      setIslogin(true);
      nav("/")
      
    }else{
      alert(res.status);
    }
  }

  return (
    <>
      <section id="ArtSignIn">
        <div className="left">
          <img
            src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/art-log.png"
            alt=""
          />
        </div>
        <div className="right">
          <div className="data">
            <header>
              <AddCardIcon id="logo" className="gold" />
              Thalasmile
            </header>
            <h1>Welcome back!</h1>
            <h2>Please sign in to continue.</h2>
            <form onSubmit={handlelogin}>
              <h3>Email</h3>
              <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="abcd123@xyz.com" />
              <h3>Password</h3>
              <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="●●●●●●●●●●●" />
              <button type="submit" className="btn">
                Sign In
              </button>
            </form>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtistSignIn;
