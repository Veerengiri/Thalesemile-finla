import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App';
import Team from "./Team";

const Resources = () => {
  const [events, setEvents] = useState([]);
  const { backend } = useContext(MyContext);
  const doctors = ["1", "1", "1"];
  const getEvents = async () => {
    const res = await fetch(`${backend}/getevents/0`, { method: "GET" });
    const evnt = await res.json();
    setEvents(evnt.events);
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <section id="resArea">
      <section id="doctors">
        <header>
          <div className="doctor">
            <div id="sm-title-r">Our Best Doctors</div>
          </div>
        </header>
        <Team />
      </section>
      <section id="blood" className="blood">
        <header>
          <div id="m-title">Blood</div>
        </header>
        {/* <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum rerum suscipit quas. Itaque temporibus dolorem vitae et perferendis quasi inventore veniam aut quam est dicta similique, voluptatum commodi unde. Aliquid voluptas, cumque dolorum fuga maiores repudiandae vitae architecto distinctio vel esse ipsam nihil velit. Illo saepe explicabo iusto numquam quasi distinctio quo doloribus asperiores? Dicta, natus aut, voluptatibus accusantium nesciunt impedit qui, aspernatur quidem dolores dignissimos deserunt voluptates minus? Iste molestias obcaecati dolorum voluptate cumque, fuga sequi veritatis, illum quaerat perferendis deleniti saepe explicabo quia itaque commodi corrupti voluptatum at reprehenderit animi? Ex soluta perspiciatis magni optio blanditiis. Cupiditate, perspiciatis.</div> */}
      </section>
      <section id="events" className="events">
        <header>
          <div id="m-title">Events</div>
        </header>
        <div class="ag-format-container">
          {events.length != 0 ? (
            <div class="ag-courses_box">
              {events.map((ev) => {
                return (
                  <div class="ag-courses_item">
                    <div>
                      <img
                        style={{ height: "200px", width: "100%" }}
                        src={ev.dp}
                      />
                    </div>
                    <a href="#" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>
                      <div class="ag-courses-item_title">{ev.name}</div>
                      <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">{ev.date}</span>
                        <br />
                        Venue:
                        <span class="ag-courses-item_date">{ev.address}</span>
                        <p
                          style={{
                            color: "black",
                            fontSize: "20px",
                            marginTop: "30px",
                          }}
                        >
                          {ev.des}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </section>
      <footer></footer>
    </section>
  );
};

export default Resources