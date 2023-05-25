import React from "react";

import TeamCRD from "../components/TeamCRD";
const Team = () => {
  const arr = [6, 3, 1, 5];
  return (
    <div>
      <br />
      <br />
      <div id="the-gym">
        <div id="ownerz">
          <TeamCRD
            dp="./imgs/d4.jpg"
            trName="Alvin Summers"
            trPost="Head Doctor"
          />
          <TeamCRD
            dp="./imgs/d2.jpg"
            trName="Oscar Williamson"
            trPost="Head Doctor"
          />
        </div>
        <br />
        <br />
        <div id="trainerzz">
          {arr.map((f) => {
            return (
              <TeamCRD
                dp={`./imgs/d${f}.jpg`}
                trName="Oscar Williamson"
                trPost="Doctor"
              />
            );
          })}
        </div>
        {/* <div id="trainerzz">
          <TeamCRD
            dp="./imgs/tr1.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr2.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr3.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr4.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr5.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr6.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr7.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/tr8.webp"
            trName="Oscar Williamson"
            trPost="Owner , coach"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Team;
