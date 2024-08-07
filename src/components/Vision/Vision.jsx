import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Vision() {
  const container = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(".visionContainer",{
      opacity:0,
      y:100,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".visionContainer",
        scrub: 1,
      }
    })


  },{scope:container})

  return (
    <section className="sectionContainer" ref={container}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="visionContainer">
              <div className="title">
                <h1>Our Vision</h1>
              </div>
              <div className="visionDetails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus optio dignissimos nulla! Reprehenderit odit quis
                  officia voluptate eos porro non necessitatibus voluptas cumque
                  error excepturi ea dolorum aliquid earum soluta id maxime
                  repellat tenetur amet, nisi iure officiis itaque at qui! Qui
                  porro, nam sunt facere repellendus,.?
                </p>
              </div>
              <div className="extraDetails">
                <div className="row row-gap-3">
                  <div className="col-lg-3">
                    <div className="cont">
                      <h1>10</h1>
                      <p>Campus</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="cont">
                      <h1>100+</h1>
                      <p>Teachers/Educators</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="cont">
                      <h1>1000+</h1>
                      <p>Students</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="cont">
                      <h1>500+</h1>
                      <p>Alumni</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
