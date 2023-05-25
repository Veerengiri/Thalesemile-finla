import React, { useContext, useEffect, useState } from "react";
import "../../styles/Home.css";
import Nav from "../../components/Nav";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const testdt = [
    {
      "author": "John",
      "message": "We appreciate you developing this platform, Thalasmile. It has been a fantastic platform for knowledge and support for me.",
      "dp": "./imgs/test1.jpg",
      "date": 5,
      "month": "January",
      "year": 2023
    },
    {
      "author": "Sarah",
      "message": "Just wanted to express how much I value the encouraging and uplifting posts on Thalasmile. I find that it truly keeps me inspired and hopeful.",
      "dp": "./imgs/test2.jpg",
      "date": 12,
      "month": "February",
      "year": 2023
    },
    {
      "author": "David",
      "message": "Thalasmile's tools and information have been invaluable in helping me manage my illness. I'm grateful.",
      "dp": "./imgs/test3.jpg",
      "date": 22,
      "month": "March",
      "year": 2023
    },
    {
      "author": "Hannah",
      "message": "I adore being able to communicate with people who have lived with thalassemia and can relate. A fantastic community has been developed by Thalasmile.",
      "dp": "./imgs/test4.jpg",
      "date": 9,
      "month": "April",
      "year": 2023
    },
    {
      "author": "Mark",
      "message": "Thalasmile has taught me a lot about thalassemia and how to treat it. It's remarkable how much knowledge can alter a situation.",
      "dp": "./imgs/test5.jpg",
      "date": 18,
      "month": "May",
      "year": 2023
    }
  ]
  const monthsname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const {backend}=useContext(MyContext);
  const [blogs,setBlogs]=useState([]);
  const [showmore,setShowmore]=useState(true);
  const getblog = async () => {
    const res = await fetch(`${backend}/getblog/0`, { method: "GET" });
    const blg = await res.json();
    if (blg.status == "ok") {
      setBlogs(blg.blogs);
    }
  };
  const fetchMoreData = async () => {
    const res = await fetch(`${backend}/getblog/${blogs.length}`, {
      method: "GET",
    });
    const blg = await res.json();
    if (blg.status == "ok") {
      setBlogs([...blogs, ...blg.blogs]);
    } else {
      setShowmore(false);
    }
  };
  useEffect(() => {
    getblog();
  }, []);
  return (
    <section>
      
      <div id="hero">
        {/* <header>
          <Nav />
        </header> */}
        <main>
          <div id="s-title">The perfect balance between </div>
          <div id="m-title">Health & Mind </div>
          <a className="btn" href="#BlgGrid">
            Know More
          </a>
        </main>
      </div>
      <div id="intro">
        <div id="int-lf">
          <img src="/imgs/intro1.jpg" alt="" />
          <div id="cb">
            <img src="/imgs/cus.svg" id="cus" />
          </div>
        </div>
        <div id="int-rg">
          <div id="blue">INTRODUCTION</div>
          <div id="s-title">Providing Quality Health Care Since 1978.</div>
          <div id="sm-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            dicta unde rerum optio amet vitae ab, delectus mollitia et doloribus
            voluptatem commodi alias eveniet harum dolores, incidunt sint?
            Maxime a, quasi tenetur accusantium similique dolore!
          </div>
          <img src="/imgs/intro2.jpg" alt="" />
        </div>
      </div>
      <div id="it-cd">
        <div id="itCont">
          <div id="itDp">
            <img src="./imgs/itcd.jpg" alt="" />
          </div>
          <div id="itData" className="itVis">
            <div id="sm-title">01</div>
            <h1>Monthly Checkups</h1>
            <div id="sm-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, dolor!
            </div>
            <a href="/">Join Now</a>
          </div>
        </div>
        <div id="itCont">
          <div id="itDp">
            <img src="./imgs/itcd2.jpg" alt="" />
          </div>
          <div id="itData" className="itVis">
            <div id="sm-title">02</div>
            <h1>Blood Donation</h1>
            <div id="sm-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, dolor!
            </div>
            <a href="/">Join Now</a>
          </div>
        </div>
        <div id="itCont">
          <div id="itDp">
            <img src="./imgs/itcd3.jpg" alt="" />
          </div>
          <div id="itData" className="itVis">
            <div id="sm-title">03</div>
            <h1>Mental Health</h1>
            <div id="sm-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, dolor!
            </div>
            <a href="/">Join Now</a>
          </div>
        </div>
      </div>
      <div id="study">
        <center>
          <div id="blue">LATEST CASE </div>
          <h1>See Our Latest Case Studies</h1>
        </center>
        <div id="grid">
          <div id="s1">
            <img src="/imgs/std1.jpg" alt="" />
          </div>
          <div id="s2">
            <img src="/imgs/std2.jpg" alt="" />
            <img src="/imgs/std4.jpg" alt="" />
          </div>
          <div id="s1">
            <img src="/imgs/std3.jpg" alt="" />
          </div>
        </div>
      </div>
      <div id="rev">
        <Swiper
          className="mySwiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {testdt.map((tm) => {
            return (
              <SwiperSlide>
                <div id="feedRev">
                  <div id="dp">
                    <img src={tm.dp} alt="" />
                  </div>
                  <h1>“{tm.message}”</h1>
                  <div id="blue">{tm.author}</div>
                  <small>Fake Nurse</small>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div id="comp">
        <span>
          <img src="./imgs/ti.png" alt="" />
          <img src="./imgs/global-logo-01.png" alt="" />
        </span>

        <span>
          <img src="./imgs/ti2.png" alt="" />
          <img src="./imgs/global-logo-02.png" alt="" />
        </span>

        <span>
          <img src="./imgs/ti3.png" alt="" />
          <img src="./imgs/global-logo-03.png" alt="" />
        </span>

        <span>
          <img src="./imgs/ti4.png" alt="" />
          <img src="./imgs/global-logo-04.png" alt="" />
        </span>

        <span>
          <img src="./imgs/ti5.png" alt="" />
          <img src="./imgs/global-logo-05.png" alt="" />
        </span>

        <span>
          <img src="./imgs/ti6.png" alt="" />
          <img src="./imgs/global-logo-06.png" alt="" />
        </span>
      </div>
      <div id="bgSection">
        <div id="bgHead">
          <div id="bghL">
            <div id="blue">BLOGS & NEWS</div>
            <h1>Check Our Latest News</h1>
          </div>
          <div id="bghR">
            Interior design is the art and science of enhancing the interiors,{" "}
            <br />
            sometimes including the exterior.
          </div>
        </div>
        <div id="BlgGrid">
          {blogs.length == 0 && <p>Loading...</p>}
          {blogs.length != 0 && (
            <div id="blogCont">
              {blogs.map((bl) => {
                const dt = new Date(bl.created_at);
                let day = dt.getDate();
                let month = monthsname[dt.getMonth()];
                let year = dt.getFullYear();

                return (
                  <div id="Blg">
                    <div id="B-top">
                      <img src={bl.dp} alt="" />
                      <div id="date">
                        <div id="day">{day}</div>
                        <div id="my">
                          {month}, {year}
                        </div>
                      </div>
                    </div>
                    <div id="B-data">
                      <div id="blue">{bl.author} - ADMIN</div>
                    </div>
                    <div
                      id="blogdesc"
                      style={{
                        maxHeight: "150px",
                        overflowY: "scroll",
                        margin: "10px",
                      }}
                    >
                      <div id="B-title">{bl.title}</div>
                      <div style={{ padding: "5px", marginTop: "16px" }}>
                        {" "}
                        <p style={{ textAlign: "justify" }}>{bl.desc}</p>{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                id="Blg"
                style={{
                  display: `${showmore ? "flex" : "none"}`,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="btn" onClick={fetchMoreData}>
                  Load More
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer>
        made &nbsp;&nbsp;&nbsp; with &nbsp;&nbsp; 💖&nbsp;&nbsp; by
        &nbsp;&nbsp;&nbsp; ThalaSmile
      </footer>
    </section>
  );
};

export default Home;
