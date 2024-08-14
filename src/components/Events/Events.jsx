import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fancybox from "../ImageZoom/Fancybox";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../helper/scroll";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const container = useRef();
  const location = useLocation();

  // Access the current path
  const currentPath = location.pathname;

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
          <h1>Events</h1>
        </div>
        <div className="row mb-5 animate">
          <div className="col-lg-12">
            <div className="eventContainer">
              <div className="row row-gap-3">
                <div className="col-lg-2 col-md-2 col-sm-3 text-center py-2">
                  <div className="dateContainer">
                    <p>July</p>
                    <h2>14</h2>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-9">
                  <div className="row">
                    <div className="col-lg-9 col-md-9">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading">
                            <a href="/">
                              <h1>
                                AGM Elections held @ Hotel Royal Livin, Gurudham
                                Colony, Varanasi
                                <i className="fa-solid fa-arrow-right "></i>
                              </h1>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-12 my-2">
                          <div className="eventDescription">
                            <p>
                              Rajkumar Agarwal Chairman of Alumni Association
                              Varanasi. The annual general meeting of the Alumni
                              Association of St. John's School Bareka was held
                              on Sunday. Rajkumar Agarwal was elected chairman,
                              Puneet Agarwal vice chairman, Abhinav Pandey
                              president, Digvijay Singh vice president, Harsh
                              Madhok secretary and Manish Kataria treasurer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <Fancybox>
                        <div
                          className="eventImagesContainer"
                          data-fancybox="gallery"
                          href="/images/events/agm-ellection.jpeg"
                        >
                          <img
                            src="/images/events/agm-ellection.jpeg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </Fancybox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 animate">
          <div className="col-lg-12">
            <div className="eventContainer">
              <div className="row row-gap-3">
                <div className="col-lg-2 col-md-2 col-sm-3 text-center py-2">
                  <div className="dateContainer">
                    <p>July</p>
                    <h2>21</h2>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-9">
                  <div className="row">
                    <div className="col-lg-9 col-md-9">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading">
                            <a href="/">
                              <h1>
                                Grand Opening of Quick Bites
                                <i className="fa-solid fa-arrow-right "></i>
                              </h1>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-12 my-2">
                          <div className="eventDescription">
                            <p>
                              Dear Friends, Join us for the grand opening of our
                              new outlet, featuring all your favorites from Sri
                              Annapurna Foods under one roof! Your presence will
                              make this special occasion even more memorable.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <Fancybox>
                        <div
                          className="eventImagesContainer"
                          data-fancybox="gallery"
                          href="/images/events/quick-bites.jpeg"
                        >
                          <img
                            src="/images/events/quick-bites.jpeg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </Fancybox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 animate">
          <div className="col-lg-12">
            <div className="eventContainer">
              <div className="row row-gap-3">
                <div className="col-lg-2 col-md-2 col-sm-3 text-center py-2">
                  <div className="dateContainer">
                    <p>August</p>
                    <h2>03</h2>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-9">
                  <div className="row">
                    <div className="col-lg-9 col-md-9">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading">
                            <a href="/">
                              <h1>
                                Enjoying Movie :- Auron May Kahan Dum Tha
                                <i className="fa-solid fa-arrow-right "></i>
                              </h1>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-12 my-2">
                          <div className="eventDescription">
                            <p>
                              Dear Friends, Please reach by 9.30 PM:. To Collect
                              your tickets & to interact with others members. To
                              Take photograhs
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <Fancybox>
                        <div
                          className="eventImagesContainer"
                          data-fancybox="gallery"
                          href="/images/events/movie.jpg"
                        >
                          <img
                            src="/images/events/movie.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </Fancybox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {currentPath === "/event" ? (
          ""
        ) : (
          <Link to={"/event"} onClick={scrollToTop}>
            <button className="viewMoreBtn">View More Events</button>
          </Link>
        )}
      </div>
    </section>
  );
}
