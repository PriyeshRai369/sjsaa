import React from "react";
import Events from "../Events/Events";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="row row-gap-4">
          <div className="col-lg-8">
            <div className="aboutContainer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                sequi ullam adipisci, eligendi itaque libero numquam in
                blanditiis debitis, officia ipsam? Adipisci illo odio dolor,
                voluptatum pariatur suscipit fugit saepe velit? Dignissimos quas
                illo magni porro. Vel laborum quas nemo eum quisquam est,
                officia suscipit harum obcaecati accusantium fuga ad?
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="eventsContainer">
              <div className="eventTitle">
                <h4>Upcoming Events</h4>
              </div>
              <div className="eventDetails">
                <div className="eventDetailsBox">
                  <div className="dateContainer">
                    <p>DEC</p>
                    <h2>19</h2>
                  </div>
                  <div className="titleContainer">
                    <Link to={"/event"}>
                      Meet & Greet.<i className="fa-solid fa-arrow-right "></i>
                    </Link>
                  </div>
                </div>
                <div className="eventDetailsBox">
                  <div className="dateContainer">
                    <p>DEC</p>
                    <h2>20</h2>
                  </div>
                  <div className="titleContainer">
                    <Link to={"/event"}>
                      Memories Events & Grand Party for '99' Batch.
                      <i className="fa-solid fa-arrow-right "></i>
                    </Link>
                  </div>
                </div>
                <div className="eventDetailsBox">
                  <div className="dateContainer">
                    <p>DEC</p>
                    <h2>21</h2>
                  </div>
                  <div className="titleContainer">
                    <Link to={"/event"}>
                      School Functions All Day Long Followed By Gala Dinner At
                      Night.<i className="fa-solid fa-arrow-right "></i>
                    </Link>
                  </div>
                </div>
              </div>
              <button className="viewMoreBtn">View More Events</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
