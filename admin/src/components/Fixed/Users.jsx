import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './App';

function Users() {
  const [user,setUser]=useState([]);
  const {backend}=useContext(MyContext);
  const getuser= async ()=>{
    const us = await fetch(`${backend}/getRegisterUserdata`,{method:"GET"});
    const res = await us.json();
    if(res.status=="ok"){
      setUser(res.users);
    }else{
      setUser([]);
    }
  }
  useEffect(()=>{
    getuser();
  },[])
  return (
    <div>
      <h1>Patients</h1>
        <h2>Total Patients: {user.length}</h2><br /><br />
      {user.length!==0 ? <div>
        {user.map((us)=>{
          return <div>
            <h4>name: {us.name}</h4>
            <h4>des: {us.des}</h4>
            <h4>email: {us.email}</h4>
            <h4>Pincode: {us.pincode}</h4>
            <h4>address: {us.address}</h4>
            <h4>blood Group: {us.bg}</h4>
            <h4>Age: {us.age}</h4>
            <h4>Thalesemia Type: {us.ttype}</h4>
            <hr />
            <br />
          </div>
        })}
      </div>: <p>Loading...</p> }
    </div>
  )
}

export default Users