import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../../Css/App.css";
import GroupsIcon from "@mui/icons-material/Groups";
import Calendar from "../Admin/Calendar/Calendar";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import AddTaskIcon from "@mui/icons-material/AddTask";
import "../../Css/Wel.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  Pie,
  ComposedChart,
} from "recharts";
import "../../Css/Charts.css";
import { MyContext } from "./App";
const pdata = [
  { numWin: 5, numOfArtist: 5, name: "KPD", TOP: "garba", date: "03/08/2023" },
  {
    numWin: 3,
    numOfArtist: 2,
    name: "Amin",
    TOP: "kathak",
    date: "08/02/2023",
  },
  { numWin: 7, numOfArtist: 1, name: "Ajit", TOP: "salsa", date: "24/01/2023" },
  {
    numWin: 2,
    numOfArtist: 9,
    name: "Viren",
    TOP: "bhangda",
    date: "15/08/2023",
  },
  {
    numWin: 0,
    numOfArtist: 7,
    name: "Saurav",
    TOP: "kathak",
    date: "19/6/2023",
  },
];
const yearGen = [
  { yr: 2018, male: 125, female: 69, max: "Male" },
  { yr: 2019, male: 225, female: 278, max: "Female" },
  { yr: 2020, male: 325, female: 165, max: "Male" },
  { yr: 2021, male: 125, female: 361, max: "Female" },
];
const comdata = [
  { siteUser: 380, month: "Jan", numOfEvent: 80, artist: 230 },
  { siteUser: 202, month: "Feb", numOfEvent: 20, artist: 30 },
  { siteUser: 584, month: "Mar", numOfEvent: 50, artist: 140 },
  { siteUser: 375, month: "Apr", numOfEvent: 110, artist: 427 },
  { siteUser: 444, month: "May", numOfEvent: 30, artist: 154 },
  { siteUser: 380, month: "Jun", numOfEvent: 0, artist: 0 },
  { siteUser: 680, month: "July", numOfEvent: 190, artist: 750 },
  { siteUser: 550, month: "Aug", numOfEvent: 20, artist: 42 },
  { siteUser: 492, month: "Sept", numOfEvent: 50, artist: 130 },
  { siteUser: 602, month: "Oct", numOfEvent: 10, artist: 23 },
  { siteUser: 829, month: "Nov", numOfEvent: 80, artist: 230 },
  { siteUser: 770, month: "Dec", numOfEvent: 50, artist: 170 },
];
const danceForm = [
  {
    yr: 2016,
    katthak: 44,
    Bharatnatyam: 2,
    Kuchipudi: 13,
    Odisi: 78,
    garba: 59,
  },
  {
    yr: 2017,
    katthak: 8,
    Kuchipudi: 2,
    Kuchipudi: 24,
    Odisi: 27,
    garba: 71,
  },
  {
    yr: 2018,
    katthak: 88,
    Bharatnatyam: 22,
    Kuchipudi: 75,
    Odisi: 27,
    garba: 67,
  },
  {
    yr: 2019,
    katthak: 14,
    Bharatnatyam: 82,
    Kuchipudi: 28,
    Odisi: 7,
    garba: 37,
  },
  {
    yr: 2020,
    katthak: 44,
    Bharatnatyam: 2,
    Kuchipudi: 53,
    Odisi: 78,
    garba: 59,
  },
  {
    yr: 2021,
    katthak: 8,
    Kuchipudi: 2,
    Bharatnatyam: 24,
    Odisi: 27,
    garba: 71,
  },
];
const Welcome = (props) => {
  const {islogin}=useContext(MyContext);
  const nav = useNavigate();
  useEffect(()=>{
    if(!islogin){
      nav("/signIn");
    }
  },[]);
  return (
    <div id="admin-wc">
      <div className="nms">
        <div className="nms-cd">
          <div>
            <span>650</span>
            <h1>Upcoming Events</h1>
          </div>
          <h2>
            <GroupsIcon />
          </h2>
        </div>
        <div className="nms-cd">
          <div>
            <span>150</span>
            <h1>Approved Form</h1>
          </div>
          <h2>
            <AddTaskIcon />
          </h2>
        </div>
        <div className="nms-cd">
          <div>
            <span>257</span>
            <h1>Pending Form</h1>
          </div>
          <h2>
            <ReportGmailerrorredIcon />
          </h2>
        </div>
      </div>
      <div className="wc-data">
        <div className="wcd-1">
          <div className="dt-title">Upcoming Events</div>
          <div className="ddt">
            <div>
              <span>
                <div className="e-n">Paint Chips</div>
                <div className="e-dat">11/12/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p2"></div>
              </div>
            </div>

            <div>
              <span>
                <div className="e-n">The Culture</div>
                <div className="e-dat">18/02/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p3"></div>
              </div>
            </div>
            <div>
              <span>
                <div className="e-n">Rangilu Gujarat</div>
                <div className="e-dat">06/07/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p4"></div>
              </div>
            </div>
            <div>
              <span>
                <div className="e-n">Our Heritage</div>
                <div className="e-dat">19/06/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p5"></div>
              </div>
            </div>
            <div>
              <span>
                <div className="e-n">Let's Rore</div>
                <div className="e-dat">09/03/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p1"></div>
              </div>
            </div>
            <div>
              <span>
                <div className="e-n">Paint Chips</div>
                <div className="e-dat">11/12/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p2"></div>
              </div>
            </div>

            <div>
              <span>
                <div className="e-n">The Culture</div>
                <div className="e-dat">18/02/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p3"></div>
              </div>
            </div>
            <div>
              <span>
                <div className="e-n">Rangilu Gujarat</div>
                <div className="e-dat">06/07/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p4"></div>
              </div>
            </div>
            <div>
              <span>
                <div className="e-n">Our Heritage</div>
                <div className="e-dat">19/06/2023</div>
              </span>
              <div class="progress">
                <div class="progress-value p5"></div>
              </div>
            </div>
          </div>
        </div>
        <section id="charts">
          <div id="ch2">
            <h1>Winners Chart</h1>
            <p>Chart Of Artist Wining Competition</p>
            <ResponsiveContainer width="100%" aspect={1.5}>
              <AreaChart
                data={pdata}
                margin={{ left: -35, right: 7, top: 13, bottom: 5 }}
              >
                <YAxis stroke="#bfbfbf" />
                {/* <CartesianGrid /> */}
                <Tooltip />
                <Legend />
                <XAxis
                  dataKey="name"
                  stroke="#bfbfbf"
                  interval="preserveStartEnd"
                />
                <Area
                  /*type="monotone"*/
                  dataKey="numOfArtist"
                  strokeWidth={2}
                  type="monotone"
                  stroke="#f54c40"
                  fill="#f54c40"
                />
                <Area
                  /*type="monotone"*/
                  dataKey="numWin"
                  strokeWidth={2}
                  type="monotone"
                  stroke="#285cf7"
                  fill="#285cf7"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
    // <div id="particles-js">
    //   <center className="welcome">
    //     <h1>
    //       Welcome to <span className="gold">myID</span>
    //     </h1>

    //     <br />
    //     <div className="ppp">
    //       <p>Welcome to our web portal for generating ID cards for artists. </p>
    //       <p>
    //         {" "}
    //         Our portal provides a streamlined and efficient process for creating
    //         and approving ID cards. The workflow includes review and approval by
    //         a clerk, officer, and commissioner to ensure accuracy and
    //         authenticity.{" "}
    //       </p>{" "}
    //       <p>
    //         Once the ID card is approved, it will be promptly sent to the
    //         artist. We are dedicated to providing a quick and secure service for
    //         all of our artist clients.{" "}
    //       </p>
    //       <p> Thank you for choosing our web portal for your ID card needs.</p>
    //     </div>
    //   </center>
    //   {/* <Calendar /> */}
    // </div>
  );
};

export default Welcome;
