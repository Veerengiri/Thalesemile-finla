import React, { createContext, useState } from "react";
import Home from "./pages/hero/Home";
import "./App.css";
import "./styles/Resources.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Comunity from "./pages/Comunity";
import Nav from "./components/Nav";
import Chat from "./components/Chat";
import io from "socket.io-client";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Resources from "./pages/Resources";
const backend = "http://localhost:3001";
const socket = io.connect(backend);

export const MyContext = createContext();

const App = () => {
  const userId ="6446c4f416ba89b7b511aa2b";
  const [user,setUser]=useState({_id:userId,name:"viren"});
  const [cid,setCid]=useState(null);
  const [refresh,setRefresh]=useState(true);
  const [islogin,setIslogin]=useState(true);
  return (
    <MyContext.Provider value={{ islogin,setIslogin,
      refresh,setRefresh,socket, userId,user,setUser,cid,setCid,socket,backend}}>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comunity" element={<Comunity/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/resourses" element={<Resources/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
