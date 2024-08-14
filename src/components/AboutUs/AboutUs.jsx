import React, { useContext } from "react";

export default function AboutUs() {
  return (
    <section className="sectionContainer">
      <div className="container" >
        <div className="title aboutTitle">
          <h1>About Us</h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="aboutContainer">
              <div className="row row-gap-2">
                <div className="col-lg-8">
                  <h3>Who are we</h3>
                  <p>
                    Welcome to the St John's School Alumni Association, a
                    vibrant community that brings together generations of proud
                    graduates from St John's School, B.L.W, Varanasi. Since its
                    inception in 1963, St John's School has been a beacon of
                    academic excellence and holistic development, shaping the
                    lives of countless students who have gone on to excel in
                    various fields. The Alumni Association, established to
                    foster lifelong connections among these accomplished
                    individuals, serves as a bridge between the school's rich
                    past and its promising future. Even after 40 years of
                    leaving the school, many of our alumni remain actively
                    involved, demonstrating their enduring commitment to the
                    values and camaraderie instilled during their formative
                    years.
                    <br />
                    <br />
                    In 2024, as we celebrate over six decades of the
                    school's legacy, the St John's School Alumni Association
                    stands as a testament to the strong bonds forged within its
                    walls. Our members, spanning across multiple generations,
                    contribute to a thriving network that supports not only each
                    other but also the ongoing growth and success of the school.
                    Through various initiatives, events, and mentorship
                    programs, the association continues to play a vital role in
                    nurturing the next generation of leaders, while also
                    providing a platform for alumni to reconnect, share
                    experiences, and give back to the institution that has
                    played such a significant role in their lives.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="aboutImageContainer">
                  <img src="/images/aboutUs.png" loading="lazy"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5">
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
                  <div style={{width:"2px",minHeight:"70px",background:"#f08a5d",margin:"0 5px"}}></div>
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
                  <div style={{width:"2px",minHeight:"70px",background:"#f08a5d",margin:"0 5px"}}></div>
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
                  <div style={{width:"2px",minHeight:"70px",background:"#f08a5d",margin:"0 5px"}}></div>
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
