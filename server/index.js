const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./routes/User');
const Admin = require('./routes/Admin');
const http = require('http');
const { Server } = require("socket.io");
const gchat = require('./models/gchat');
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(User);
app.use(Admin);

const mongourl = "mongodb+srv://Veerengiri:762003@cluster0.vjo3ghd.mongodb.net/thelesemine?retryWrites=true&w=majority";
mongoose.connect(mongourl,{}).then(()=>{
  console.log("connected mongourl successfully");
}).catch((err)=>{console.log(err)})

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });
  socket.on("send_message",async (data) => {
    socket.to(data.room).emit("receive_message", data);
    gchat.create({
      cid:data.room,
      sid:data.sid,
      msg:data.msg,
      name:data.name,
    }).then(()=>{console.log("ok")}).catch(()=>{console.log("err")});
    
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.get("/",(req,res)=>{
    res.send("<H1>welcome to thelesemine</H1>")
})
server.listen(3001, () => {
    console.log("SERVER RUNNING");
});

