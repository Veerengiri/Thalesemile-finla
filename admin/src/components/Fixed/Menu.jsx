import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import "../../Css/Menu.css";
const Menu = () => {
  let colTheme = document.getElementById("light-t");
  if (colTheme) {
    console.log(colTheme);
  }
  const [theme, setTheme] = useState("light-t");
  const themeSwitch = () => {
    // console.log("light");
    if (theme === "dark-t") {
      setTheme("light-t");
    } else {
      setTheme("dark-t");
    }
  };
  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  let colorInput = document.getElementById("color");
  if (colorInput) {
    colorInput.addEventListener("input", () => {
      // document.getElementById("colorVal").innerHTML = colorInput.value;
      let cl = colorInput.value;
      console.log(cl);
    });
  }
  return (
    <>
      <nav>
        <div className="search" style={{ visibility: "hidden" }}>
          <input
            type="search"
            name=""
            placeholder="Search for anything ..."
            id=""
          />
          <SearchIcon />
        </div>
        <div className="nav-links">
          <LightModeOutlinedIcon id="light" onClick={themeSwitch} />
          <MarkEmailUnreadOutlinedIcon id="mail" />
          <NotificationsActiveOutlinedIcon id="noti" />
        </div>
      </nav>
    </>
  );
};

export default Menu;
