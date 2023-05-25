import React, { useContext, useState,useEffect } from "react";
import Tilt from "react-parallax-tilt";
import "../../Css/Event.css";
import { MyContext } from "./App";
const BlogList = () => {
    const monthsname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [events,setEvents]=useState([]);
  const {backend}=useContext(MyContext);
  const getEvents = async ()=>{
    const res = await fetch(`${backend}/getblog/0`,{method:"GET"});
    const evnt = await res.json();
    setEvents(evnt.blogs);
  }
  const deleteEvent = async (id)=>{
    if(!window.confirm("are you want to delete this Blog?")){
      return;
    }
    const res = await fetch(`${backend}/deleteblog/${id}`,{method:"DELETE"});
    const dlt = await res.json();
    if(dlt.status=="ok"){
      let newdt =[];
      events.forEach(el => {
        if(el._id!=id){
          newdt.push(el);
        }
      });
      setEvents(newdt);
    }else{
      alert(dlt.status);
    }
  }
  useEffect(()=>{
    getEvents();
  },[])
  return (
    <div className="eee">
      <div>
        <header className="event-sec">
          <center>
            <div className="e-title">
              Current
              <span id="golden"> List Of </span>
              Blogs
            </div>
          </center>
        </header>
        <section>
          {events.length!=0 ? <div className="e-list">
            {events.map((ev)=>{
                const dt = new Date(ev.created_at);
                let day = dt.getDate();
                let month = monthsname[dt.getMonth()];
                let year = dt.getFullYear();

              return <Tilt
              glareEnable={true}
              glareColor="#ebe7ee47"
              glarePosition="all"
              tiltMaxAngleX="13"
              tiltMaxAngleY="4"
            >
              <div className="card">
                <div className="card-img">
                  <img src={ev.dp} />
                  <div className="time">
                    {day} <br />
                    {month}
                  </div>
                </div>
                <div className="card-info">
                  <div className="info-loc">{ev.author}</div>
                  <div className="info-t">{ev.title}</div>
                  <div className="info-des">
                    {ev.desc}
                  </div>
                  <div className="join btn" onClick={(e)=>{
                    e.preventDefault();
                    deleteEvent(ev._id);
                  }}>Delete Blog</div>
                </div>
              </div>
            </Tilt>
            })}
            
          </div> : <p style={{color:'blue'}}>Loading...</p> }
        </section>
      </div>
    </div>
  );
};

export default BlogList;
