import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "../../Css/App.css";
import "../Fixed/Aside";
import "../Fixed/Menu";
import Aside from "../Fixed/Aside";
import Menu from "../Fixed/Menu";
import Charts from "../Admin/Charts/Charts";
import Contact from "../Admin/Forms/Contact";
import Events from "../Fixed/Events";
import Footer from "../Fixed/Footer";
import ArtistSignIn from "../Log/ArtistSignIn";
import ArtUp from "../Log/ArtUp";
import Calendar from "../Admin/Calendar/Calendar";
import Error404 from "../Fixed/Error404";
import Welcome from "../Fixed/Welcome";
import Camp from "./Camp";

import CampList from "./CampList";
import Blog from "./Blog";
import BlogList from "./BlogList";
import Users from "./Users";


export const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const backend = "http://localhost:3001";
  const [islogin,setIslogin]=useState(true);
  const [admin,setAdmin]=useState(null);
 
  
  return (
    <MyContext.Provider value={{backend,islogin,admin,setAdmin,setIslogin}}>
      <Router>
        <Routes>
          <Route path="/signIn" element={<ArtistSignIn />} />
          <Route path="/signUp" element={<ArtUp />} />
          <Route path="*" element={<Error404 />} />

          {/* <Route
            path="/"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Welcome />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          /> */}
          <Route
            path="/"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Charts />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/patients"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Users/>  
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/event-list"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Events />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/add/event"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Contact />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/add/blog"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Blog />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/add/camp"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Camp />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route

            path="/admin/camps"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <CampList/>
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <BlogList/>
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
          <Route


            path="/admin/add/bookmark"
            element={
              <div className="App">
                <Aside />
                <main>
                  <Menu />
                  <div id="router">
                    <Calendar />
                  </div>
                  <Footer />
                </main>
              </div>
            }
          />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
