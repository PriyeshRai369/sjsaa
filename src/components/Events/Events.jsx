import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const container = useRef();

  useGSAP(()=>{
    let ctx = gsap.context(()=>{
      const tl = gsap.timeline()

      tl.from(".animate",{
        scrollTrigger: {
          trigger: ".animate",
          start: "top top",
          scrub: 1,
          markers: true,
        },
        opacity:0,
        y:100,
        duration:0.5,
        delay:0.5,
        stagger:0.5,
  
      })
    })
    
  },{scope:container})


  return (
    <section className="sectionContainer" ref={container}>
      <div className="container">
        <div className="title">
          <h1>Upcoming Events</h1>
        </div>
        <div className="row mb-5 animate">
          <div className="col-lg-12">
            <div className="eventContainer">
              <div className="row">
                <div className="col-lg-2" style={{ borderRight: "1px solid" }}>
                  <p>DEC</p>
                  <h2>19</h2>
                </div>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading">
                        <a href="/">
                          <h1>
                            Meet & Greet{" "}
                            <i className="fa-solid fa-arrow-right "></i>
                          </h1>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12 my-2">
                      <div className="eventDate">
                        <p>
                          <i className="fa-solid fa-calendar-days"></i>
                          MONDAY, 19 DEC 2024 | 10:00 AM to 08:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="location">
                        <p>
                          <i className="fa-solid fa-location-dot"></i>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Et, aliquid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 animate" ref={container}>
          <div className="col-lg-12">
            <div className="eventContainer">
              <div className="row">
                <div className="col-lg-2" style={{ borderRight: "1px solid" }}>
                  <p>DEC</p>
                  <h2>20</h2>
                </div>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading">
                        <a href="/">
                          <h1>
                            Memories Events & Grand Party for '99' Batch{" "}
                            <i className="fa-solid fa-arrow-right "></i>
                          </h1>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12 my-2">
                      <div className="eventDate">
                        <p>
                          <i className="fa-solid fa-calendar-days"></i>
                          Tuesday, 20 DEC 2024 | 10:00 AM to 08:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="location">
                        <p>
                          <i className="fa-solid fa-location-dot"></i>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Et, aliquid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 animate" ref={container}>
          <div className="col-lg-12">
            <div className="eventContainer">
              <div className="row">
                <div className="col-lg-2" style={{ borderRight: "1px solid" }}>
                  <p>DEC</p>
                  <h2>21</h2>
                </div>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading">
                        <a href="/">
                          <h1>
                            School Functions All Day Long Followed By Gala
                            Dinner At Night.{" "}
                            <i className="fa-solid fa-arrow-right "></i>
                          </h1>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12 my-2">
                      <div className="eventDate">
                        <p>
                          <i className="fa-solid fa-calendar-days"></i>
                          Wednesday, 21 DEC 2024 | 10:00 AM to 08:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="location">
                        <p>
                          <i className="fa-solid fa-location-dot"></i>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Et, aliquid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="viewMoreBtn">View More Events</button>
      </div>
    </section>
  );
}
