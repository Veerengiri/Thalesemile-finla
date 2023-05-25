import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App'
import { useNavigate } from 'react-router-dom';

function Comunity() {
  const nav = useNavigate()
  const {backend,userId,setCid,setUser,user,socket,setSocket}=useContext(MyContext);
  const [coms,setComs]=useState([]);
  const getComs = async ()=>{
    const res = await fetch(`${backend}/getcom/${user._id}`,{method:"GET"});
    const dt = await res.json();
    if(dt.status=="ok"){
      setComs(dt.dt);
    }else{
      setComs([]);
    }
  }
  
  const openchat=(cm)=>{
    setCid(cm);
    socket.emit("join_room", cm._id);
    // setShowChat(true);
    nav("/chat");
  }
  useEffect(()=>{
    getComs()
  },[])
  return (
    <div style={{margin:"100px"}}>
      {/* <button onClick={()=>{setUser({_id:"6446c5b116ba89b7b511aa2d",name:"priyash"})}}>changeid p</button>
      <button onClick={()=>{setUser({_id:"6448b4d4ed24974ca6d6d439",name:"jash"})}}>changeid j</button> */}
      <h3>Your Comunity</h3>
      <div onClick={()=>{openchat({_id:'general'})}} style={{backgroundColor:"rgba(0,0,255,.2)",cursor:"pointer",marginBottom:"5px"}}>
          <h4 >General</h4>
          <p>this is comunity for all patients</p>
      </div>
      {coms.length!=0 && coms.map((cm)=>{
        return <div onClick={()=>{openchat(cm)}} style={{backgroundColor:"rgba(0,0,255,.2)",cursor:"pointer",marginBottom:"5px"}}>
          <h4 >{cm.name}</h4>
          <p>{cm.des}</p>
        </div>
      })}
    </div>
  )
}

export default Comunity