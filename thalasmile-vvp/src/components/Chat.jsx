import React, { useContext, useEffect, useState,useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { MyContext } from "../App";
import './chat.css'
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import  ReactDOM from "react-dom";
// import './Community.css';
// 
// let ab = true;
function Chat() {
  const monthsname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const { socket, user, cid, backend } = useContext(MyContext);
  const room = cid._id;
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatlength, setChatlength] = useState(0);
  const [page, setPage] = useState(1);
  const [messageList, setMessageList] = useState([]);
  const [isprocess, setIsprocess] = useState(false);
  const [loading, setLoading] = useState(false);
  const socketRef = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    if (isprocess) {
      return;
    }
    setIsprocess(true);
    const dt = new Date();
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        name: user.name,
        sid: user._id,
        msg: currentMessage,
        created_at: new Date().toISOString().replace("Z", "+00:00"),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [messageData, ...list]);
      setCurrentMessage("");
    }
    setTimeout(() => {
      setIsprocess(false);
    }, 1000);
    // console.log(++cnt);
  };

  const getchat = async () => {
    const dt = await fetch(`${backend}/comchat/${room}/0`, { method: "GET" });
    const res = await dt.json();
    if (res.status == "ok") {
      setMessageList(res.chats);
    } else {
      setMessageList([]);
    }
  };
  const getlegth = async () => {
    const res = await fetch(`${backend}/getchatlength/${cid._id}`, {
      method: "GET",
    });
    const { length } = await res.json();
    setChatlength(length);
    console.log("chat length " + length);
  };
  const fetchMoreData = async () => {
    setLoading(true);
    const dt = await fetch(`${backend}/comchat/${room}/${messageList.length}`, {
      method: "GET",
    });
    const res = await dt.json();
    if (res.status == "ok") {
      setMessageList([...messageList, ...res.chats]);
    }
    setLoading(false);
  };

  const deletemsg = async (msg) => {
    if (msg._id) {
      const dt = await fetch(`${backend}/comchat/${msg._id}`, {
        method: "DELETE",
      });
      const res = await dt.json();
      if (res.status == "ok") {
        let mln = [];
        messageList.forEach((el) => {
          if (el?._id == msg._id) {
          } else {
            mln.push(el);
          }
        });
        setMessageList(mln);
      }
    } else {
      const dt = await fetch(`${backend}/comdeletechat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(msg),
      });
      const res = await dt.json();
      if (res.status == "ok") {
        let mln = [];
        messageList.forEach((el) => {
          if (el.msg == msg.msg && el.name == msg.name && el.sid == msg.sid) {
          } else {
            mln.push(el);
          }
        });
        setMessageList(mln);
      }
    }
  };
  

  useEffect(() => {
    socketRef.current = socket;
  }, [socket]);
  useEffect(() => {
    // const socket = socketRef.current;
    socket.on("receive_message", (data) => {
      setMessageList((list) => [data, ...list]);
    });
    return () => {
      socket.off("receive_message");
    };
  });

  useEffect(() => {
    getchat();
    // getlegth();
  }, []);

  return (
    <div className="App">
      {/* <Link to="/comunity" style={{color:"red"}}>🔙 go Back </Link> */}
      <div className="chat-window">
        <div className="chat-sec">
          <p>Chat Room {cid.name}</p>
          <div className="chat-header">
            <p>Live Chat {user.name}</p>
          </div>
          <div className="chat-body">
            {loading && (
              <p style={{ margin: "10px", alignItems: "center" }}>Loading...</p>
            )}
            <ScrollToBottom className="message-container">
              <button
                style={{
                  alignContent: "center",
                  margin: "20px",
                  marginLeft: "120px",
                }}
                onClick={fetchMoreData}
              >
                
                {" "}
                Load more
              </button>
              <InfiniteScroll
                dataLength={messageList.length}
                next={fetchMoreData}
                style={{ display: "flex", flexDirection: "column-reverse" }}
                inverse={true}
                hasMore={true}
                // loader={  }
              >
                {messageList.length != 0 &&
                  messageList.map((messageContent) => {
                    let tm = messageContent.created_at;
                    let time =
                      new Date(tm).getHours() + ":" + new Date(tm).getMinutes();
                    let date =
                      new Date(tm).getDate() +
                      " " +
                      monthsname[new Date(tm).getMonth()];
                    return (
                      <>
                        <div
                          className="message"
                          id={
                            user.name === messageContent.name &&
                            user._id == messageContent.sid
                              ? "you"
                              : "other"
                          }
                        >
                          <div>
                            <div className="message-content">
                              <p>{messageContent.msg}</p>
                              <p
                                onClick={() => {
                                  deletemsg(messageContent);
                                }}
                                style={{
                                  scale: ".6",
                                  cursor: "pointer",
                                  opacity: ".7",
                                  display: `${
                                    messageContent.sid == user._id
                                      ? "unset"
                                      : "none"
                                  }`,
                                }}
                              >
                                ❌
                              </p>
                            </div>
                            <div className="message-meta">
                              <p style={{ marginRight: "10px" }}>{date}</p>
                              <p id="time">{time}</p>
                              <p id="author">{messageContent.name}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </InfiniteScroll>
            </ScrollToBottom>
          </div>
          <form onSubmit={sendMessage} className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
            />
            <button type="submit">&#9658;</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Chat) ;