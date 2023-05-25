import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../../../Css/Contact.css";
import "../../../Css/EventForm.css";
import FestivalIcon from "@mui/icons-material/Festival";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";

const Contact = () => {
  const backend="http://localhost:3001";
  const [eventName, setEventName] = useState("")
  const [date, setDate] = useState("")
  const [evenPoster, setEvenPoster] = useState("")
  const [location, setLocation] = useState("")
  const [eventDesc, setEventDesc] = useState("")
  const nav = useNavigate();

  const handlesubmit = async (e)=>{
    e.preventDefault();
    if(eventName=="" || date=="" || evenPoster==""|| location ==""|| eventDesc==""){
      alert("invalid creadentials")
      return;
    }
    const res= await fetch(`${backend}/createEvent`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        admin:"123456789",
        name:eventName,
        date:date,
        des: eventDesc,
        dp: evenPoster,
        address: location,
      })
    })
    const dt = await res.json();
    if(dt.status=="ok"){
      alert("event added succesfully");
      nav("/");
    }else{
      alert("event added succesfully");
    }
  }
  return (
    <div>
      <header className="event-sec">
        <div className="e-title">
          Add
          <span id="golden"> New </span>
          Events
        </div>
      </header>
      <div className="message">
        <form onSubmit={handlesubmit} className="contactus">
          <div className="input">
            <label className="icon">
              <FestivalOutlinedIcon />
            </label>
            <input type="text" className="name" placeholder="Event Name" onChange={(e) => {
                setEventName(e.target.value)
              }}/>
          </div>
          <div className="input">
            <label className="icon">
              <DateRangeRoundedIcon />
            </label>
            <input type="date" className="name" placeholder="" onChange={(e) => {
                setDate(e.target.value)
              }}/>
          </div>
          <div className="input">
            <label className="icon">
              <FestivalIcon />
            </label>
            <div className="nn2">
              <input type="url" value={evenPoster} placeholder="Link Event Poster" onChange={(e) => {
                setEvenPoster(e.target.value)
              }}/>
            </div>
          </div>
          <div className="input">
            <label className="icon">
              <AddLocationAltRoundedIcon />
            </label>
            <input type="text" className="name" placeholder="Event Location" onChange={(e) => {
                setLocation(e.target.value)
              }}/>
          </div>
          <div className="inmsg">
            <label className="icon msicon">
              <DescriptionRoundedIcon />
            </label>
            <textarea
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
            <button className="btn" type="submit">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
