import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../styles/TeamCRD.css";
const TeamCRD = (props) => {
  return (
    <>
      <div id="tm-cd">
        <div id="prlx">
          <img src={props.dp} alt="" />
          <div className="soc">
            <FacebookRoundedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div id="tr-name">{props.trName}</div>
        <div id="tr-post">{props.trPost}</div>
      </div>
    </>
  );
};

export default TeamCRD;
