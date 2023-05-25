import React, { useState } from "react";
import "../../Css/Contact.css";
import "../../Css/EventForm.css";
import FestivalIcon from "@mui/icons-material/Festival";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";

import {useNavigate} from 'react-router-dom';



const Camp = () => {
  const [date, setDate] = useState("")
  const [eventPoster, setEventPoster] = useState("")
  const [location, setLocation] = useState("")
  const [eventDesc, setEventDesc] = useState("")
  const nav = useNavigate();
  const handelsubmit =async (e)=>{
    const backend = "http://localhost:3001";
    e.preventDefault()
    if(date=="" ||eventPoster=="" ||location=="" ||eventDesc=="" ){
      alert("invalid credentials...");
      return;
    }
    const res = await fetch(`${backend}/createcamp`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        admin:"123456789",
        address:location,
        des:eventDesc,
        date: date,
        dp:eventPoster
      })
    })
    const st = await res.json();
    if(st.status=="ok"){
      nav("/admin/camps");
    }else{
      alert(st.status);
    }
  }
  return (
    <div>
      <header className="event-sec">
        <div className="e-title">
          Add
          <span id="golden"> New </span>
          Blood Donation Camp
        </div>
      </header>
      <div className="message">
        <form onSubmit={handelsubmit} className="Campus">
          <div className="input">
            <label className="icon">
              <DateRangeRoundedIcon />
            </label>
            <input type="date" className="name"  onChange={(e) => {

                setDate(e.target.value)
              }} />
          </div>
          <div className="input">
            <label className="icon">
              <FestivalIcon />
            </label>
            <div className="nn2">
              <input type="url" value={eventPoster} placeholder="Link Blood Poster"  onChange={(e) => {

                setEventPoster(e.target.value)
              }}/>
            </div>
          </div>
          <div className="input">
            <label className="icon">
              <AddLocationAltRoundedIcon />
            </label>
            <input type="text" className="name" value={location} placeholder="Event Location" onChange={(e) => {
                setLocation(e.target.value)

            
              }} />
          </div>
          <div className="inmsg">
            <label className="icon msicon">
              <DescriptionRoundedIcon />
            </label>
            <textarea
              value={eventDesc}
              cols="30"
              rows="10"
              className="msg"
              placeholder="Event Description"
              onChange={(e) => {
                setEventDesc(e.target.value)
              }}
            />
          </div>
          <div className="forbtn">
            <button className="btn" type="submit"  onClick={() => {
            }}>Add Camp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Camp
