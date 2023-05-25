import React, { useContext } from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FestivalOutlinedIcon from "@mui/icons-material/FestivalOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import FestivalIcon from "@mui/icons-material/Festival";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import EventIcon from "@mui/icons-material/Event";
import "../../Css/Aside.css";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "./App";
const Aside = () => {
  const {setIslogin,setAdmin}=useContext(MyContext);
  const nav = useNavigate();
  return (
    <>
      <aside>
        <header>
          {/* <AddCardIcon id="logo" className="gold" /> */}
          ThaleSmile
        </header>
        <div style={{ margin: "15px 0" }}></div>
        <section className="menu-links">
          <div className="g-1">
            <div className="title">Main</div>
            <Link className="links" to="/">
              <DashboardOutlinedIcon />
              Index
            </Link>
          </div>
          <div className="g-2">
            <div className="title">General</div>
            <Link className="links" to="/patients">
              <FestivalOutlinedIcon />
              Patients
            </Link>
            <Link className="links" to="/admin/event-list">
              <FestivalOutlinedIcon />
              Event-List
            </Link>
            <Link className="links" to="/admin/camps">
              <FestivalOutlinedIcon />
              Blood-Camps-List
            </Link>
            <Link className="links" to="/admin/blogs">
              <FestivalOutlinedIcon />
              BlogList
            </Link>

            {/* <Link className="links" to="/admin/charts">
              <InsertChartOutlinedIcon />
              Charts
            </Link> */}
          </div>
          <div className="g-3">
            <div className="title">Add New</div>
            <Link className="links" to="/admin/add/event">
              <FestivalIcon />
              Add Events
            </Link>
            <Link className="links" to="/admin/add/camp">
              <FestivalIcon />
              Add Blood Camp
            </Link>
            <Link className="links" to="/admin/add/blog">
              <FestivalIcon />
              Add Blog
            </Link>

            {/* <Link className="links" to="/admin/add/bookmark">
              <EventIcon /> Add Bookmark
            </Link> */}
          </div>

          <div className="g-5">
            <button onClick={()=>{
              setIslogin(false);
              setAdmin(null);
              nav("/signIn");
            }} className="log-out">
              <LogoutIcon id="gold" /> LogOut
            </button>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Aside;
