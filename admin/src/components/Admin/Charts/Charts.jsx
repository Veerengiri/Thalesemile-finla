import React, { useContext, useEffect, useState } from "react";
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
import "../../../Css/Charts.css";
import { MyContext } from "../../Fixed/App";
import { useNavigate } from "react-router-dom";


const Charts = () => {
  const {islogin,backend}=useContext(MyContext);
  const [pdata,setPdata]=useState([]);
  const [yearGen,setYearGen]=useState([]);
  const [yearGen2,setYearGen2]=useState([]);
  const nav = useNavigate();
  const fetchDataRegChart = async ()=>{
    const res = await fetch(`${backend}/regUserChart`,{method:"GET"});
    const dt  = await res.json();
    setPdata(dt.status=="ok"?dt.users:[]);
  }
  const fetchDataARegChart = async ()=>{
    const res = await fetch(`${backend}/regUserChart`,{method:"GET"});
    const dt  = await res.json();
    setYearGen(dt.status=="ok"?dt.users:[]);
  }
  const fetchDataEventChart = async ()=>{
    const res = await fetch(`${backend}/getActiveChart`,{method:"GET"});
    const dt  = await res.json();
    setYearGen2(dt.status=="ok"?dt.users:[]);
  }
  useEffect(()=>{
    if(!islogin){
      nav("/signIn");
    }else{
      fetchDataRegChart();
      fetchDataEventChart();
      fetchDataARegChart();
    }
  },[]);
  return (
    <>
      <header className="event-sec">
        <center>
          <div className="e-title">
            Current
            <span id="golden"> Analysis of </span>
            Data
          </div>
        </center>
      </header>
      <section id="charts">
        <div id="ch1">
          <h1>Users Registrations</h1>
          <p>Chart Of Individual Artist</p>
          <ResponsiveContainer width="100%" aspect={1.5}>
            <LineChart
              data={pdata}
              margin={{ left: -35, right: 7, top: 13, bottom: 5 }}
            >
              <YAxis stroke="#bfbfbf" />
              <CartesianGrid strokeDasharray="5 3" stroke="#757575" />
              <Tooltip />
              <Legend />
              <XAxis
                dataKey="month"
                stroke="#bfbfbf"
                interval="preserveStartEnd"
              />
              <Line
                /*type="monotone"*/
                dataKey="users"
                strokeWidth={2}
                stroke="#ffc107"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>  
       
        
        <div id="ch4">
          <h1>Events</h1>
          <p>Chart by Artist Gender ratio per year</p>
          <ResponsiveContainer width="100%" aspect={1.5}>
            <BarChart
              data={yearGen}
              margin={{ left: 5, right: 7, top: 13, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#bfbfbf" />
              {/* <YAxis dataKey="max" /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="users" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div id="ch2">
          <h1>Active Users </h1>
          <p>Chart Of Individual Artist</p>
          <ResponsiveContainer width="100%" aspect={1.5}>
            <LineChart
              data={yearGen2}
              margin={{ left: -35, right: 7, top: 13, bottom: 5 }}
            >
              <YAxis stroke="#bfbfbf" />
              <CartesianGrid strokeDasharray="5 3" stroke="#757575" />
              <Tooltip />
              <Legend />
              <XAxis
                dataKey="month"
                stroke="#bfbfbf"
                interval="preserveStartEnd"
              />
              <Line
                /*type="monotone"*/
                dataKey="users"
                strokeWidth={2}
                stroke="#ffc107"
              />
            </LineChart>
          </ResponsiveContainer>
        </div> 
        
      </section>{" "}
    </>
  );
};

export default Charts;
