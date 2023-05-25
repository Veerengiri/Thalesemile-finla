import React, { useContext, useState } from "react";
import "../../Css/Contact.css";
import "../../Css/EventForm.css";
import FestivalIcon from "@mui/icons-material/Festival";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./App";
const Blog = () => {
  const {backend}= useContext(MyContext);
  const nav = useNavigate();
  const [authorName, setAuthorName] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogPoster, setbBlogPoster] = useState("");
  const [blogDesc, setBlogDesc] = useState("");

  const handlesubmit =async (e)=>{
    e.preventDefault()
    if(authorName==""  || blogTitle==""|| blogPoster==""|| blogDesc==""){
      alert("invalid credentials");
      return;
    }
    const res = await fetch(`${backend}/createblog`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        author:authorName,
        title:blogTitle,
        desc: blogDesc,
        dp: blogPoster
      })
    })
    const st = await res.json();
    if(st.status=="ok"){
      nav("/admin/blogs");
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
          Blog
        </div>
      </header>
      <div className="message">
        <form onSubmit={handlesubmit} className="contactus">
          <div className="input">
            <label className="icon">
              <FestivalOutlinedIcon />
            </label>
            <input type="text" value={authorName} className="name" placeholder="Author Name" onChange={(e) => {
              setAuthorName(e.target.value)
            }} />
          </div>
          <div className="input">
            <label className="icon">
              <FestivalOutlinedIcon />
            </label>
            <input type="text" className="title" placeholder="Blog Title" value={blogTitle} onChange={(e) => {
              setBlogTitle(e.target.value)
            }}/>
          </div>

          <div className="input">
            <label className="icon">
              <FestivalIcon />
            </label>
            <div className="nn2">
              <input type="url" placeholder="Link Blog Poster" value={blogPoster}  onChange={(e) => {
              setbBlogPoster(e.target.value)
            }}/>
            </div>
          </div>

          <div className="inmsg">
            <label className="icon msicon">
              <DescriptionRoundedIcon />
            </label>
            <textarea
              value={blogDesc}
              cols="30"
              rows="10"
              className="msg"
              placeholder="Blog Description"
              onChange={(e) => {
                setBlogDesc(e.target.value)
              }}
            />
          </div>
          <div className="forbtn">
            <button className="btn" type="submit">Add Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;
