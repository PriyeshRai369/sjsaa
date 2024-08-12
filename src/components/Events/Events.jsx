import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const container = useRef();

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        const text = document
          .querySelector(".eveTitle h1")
          .textContent.split("")
          .map((val) => (val === " " ? "&nbsp;" : `<span>${val}</span>`))
          .join("");

        document.querySelector(".eveTitle h1").innerHTML = text;

        gsap.from(".eveTitle h1 span", {
          opacity: 0,
          delay: 0.5,
          duration: 0.5,
          stagger: 0.09,
        });

        gsap.from(".animate", {
          delay: 2,
          opacity: 0,
          y: 100,
          duration: 0.5,
          delay: 0.5,
          stagger: 0.5,
        });
      });
    },
    { scope: container }
  );

  return (
    <section className="sectionContainer" ref={container}>
      <div className="container">
        <div className="title eveTitle">
          <h1>Upcoming Events</h1>
        </div>
        <div className="row mb-5 animate">
          <div className="col-lg-12">
            <div className="eventContainer">
              <div className="row row-gap-3">
                <div className="col-lg-2 col-md-2 col-sm-3 text-center py-2">
                  <div className="dateContainer">
                    <p>DEC</p>
                    <h2>19</h2>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-9">
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
                      <div className="eventDescription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptas aperiam fugit, quaerat maiores odit hic
                          placeat consequuntur ullam maxime officia!
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
              <div className="row row-gap-3">
                <div className="col-lg-2 col-md-2 col-sm-3 text-center py-2">
                  <div className="dateContainer">
                    <p>DEC</p>
                    <h2>20</h2>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-9">
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
                      <div className="eventDescription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptas aperiam fugit, quaerat maiores odit hic
                          placeat consequuntur ullam maxime officia!
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
              <div className="row row-gap-4">
                <div className="col-lg-2 col-md-2 col-sm-3 text-center py-2" >
                  <div className="dateContainer">
                    <p>DEC</p>
                    <h2>21</h2>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-9">
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
                      <div className="eventDescription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptas aperiam fugit, quaerat maiores odit hic
                          placeat consequuntur ullam maxime officia!
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
