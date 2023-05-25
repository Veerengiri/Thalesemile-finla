import React, { useContext } from "react";
import "../styles/Nav.css";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { MyContext } from "../App";
const Nav = () => {
  const location = useLocation();
  const nav = useNavigate();
  const {islogin,setIslogin,setUser}=useContext(MyContext);
  const logoutfun = ()=>{
    setIslogin(false);
    setUser(null);
    window.localStorage.clear();
    nav("/");
  }
  return (
    <nav style={{ position: "fixed", top: "0", width: "100%", zIndex: "50" }}>
      <div id="logo">
        <abbr title="ThalaSmile">
          <PsychologyAltIcon />
        </abbr>
      </div>
      <div id="links">
        <Link
          to="/"
          style={{ display: `${location.pathname == "/" ? "none" : "unset"}` }}
        >
          Home
        </Link>
        <a
          style={{ display: `${location.pathname == "/" ? "unset" : "none"}` }}
          href="#hero"
        >
          Home
        </a>
        <a
          style={{ display: `${location.pathname == "/" ? "unset" : "none"}` }}
          href="#intro"
        >
          About
        </a>
        {islogin && <Link to="/comunity">Community</Link>}
        <a
          style={{ display: `${location.pathname == "/" ? "unset" : "none"}` }}
          href="#rev"
        >
          Testimonials
        </a>
        <a
          style={{ display: `${location.pathname == "/" ? "unset" : "none"}` }}
          href="#BlgGrid"
        >
          Blogs
        </a>
        {islogin && <Link to="/resourses">Resource</Link>}
        <a
          style={{
            display: `${location.pathname == "/resourses" ? "unset" : "none"}`,
          }}
          href="#doctors"
        >
          Doctors
        </a>
        <a
          style={{
            display: `${location.pathname == "/resourses" ? "unset" : "none"}`,
          }}
          href="#blood"
        >
          Blood
        </a>
        <a
          style={{
            display: `${location.pathname == "/resourses" ? "unset" : "none"}`,
          }}
          href="#events"
        >
          Events
        </a>
        {!islogin && <Link to="/signin">SingIn</Link>}
        {islogin && (
          <a onClick={logoutfun} style={{ cursor: "pointer" }}>
            Logout
          </a>
        )}
      </div>
      <div id="togg">
        <WidgetsIcon />
      </div>
    </nav>
  );
};

export default Nav;
