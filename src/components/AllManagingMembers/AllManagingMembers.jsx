import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AllManagingMembers() {

  const members = useRef();

  useGSAP(
    () => {
      const txt = document
        .querySelector(".tl")
        .textContent.split("")
        .map((val) => (val === " " ? "&nbsp;" : `<span>${val}</span>`))
        .join("");

      document.querySelector(".tl").innerHTML = txt;
      gsap.from(".tl span", {
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.09,
      });
      gsap.from(".firstRow div",{
        opacity:0,
        duration:0.7,
        stagger:0.05
      })
    },
    { scope: members }
  );



  return (
    <section className="sectionContainer" ref={members}>
      <div className="container">
        <div className="title">
          <h1 className="tl">All Managing Committee Members</h1>
        </div>
        <div className="row row-gap-3 firstRow">
          <div className="col-lg-4 col-md-6 col-sm-6 ">
            <div className="committeeContainer">
              <div className="committeeMemberImage">
                <img src="/images/managing/chairman.jpg" alt="" loading="lazy"/>
              </div>
              <div className="committeeMemberDetails">
                <h3>XJ RAJKUMAR AGRAWAL</h3>
                <p>
                  1982 Batch
                  <br /> CHAIRMAN
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 ">
            <div className="committeeContainer">
              <div className="committeeMemberImage">
                <img src="/images/managing/Vice-Chairman.jpg" alt="" loading="lazy"/>
              </div>
              <div className="committeeMemberDetails">
                <h3>XJ PUNEET AGRAWAL</h3>
                <p>
                  1984 Batch
                  <br />
                  VICE-CHAIRMAN
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 ">
            <div className="committeeContainer">
              <div className="committeeMemberImage">
                <img src="/images/managing/Vice-Chairman-02.png" alt="" loading="lazy" />
              </div>
              <div className="committeeMemberDetails">
                <h3>XJ PANKAJ AGRAWAL</h3>
                <p>
                  1989 Batch
                  <br /> VICE-CHAIRMAN
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row row-gap-3">
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/President.png" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ ABHINAV PANDEY</h6>
                    <p>
                      1999 Batch
                      <br />
                      PRESIDENT
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/Vice-President.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ DIGVIJAY SINGH</h6>
                    <p>
                      2000 Batch
                      <br />
                      VICE PRESIDENT
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/Secretary.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ HARSH MADHOK</h6>
                    <p>
                      1999 Batch
                      <br />
                      SECRETARY
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/Treasurer.png" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ MANISH KATARIA</h6>
                    <p>
                      1993 Batch
                      <br />
                      TREASURER
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/shubhankar.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ SHUBHANKAR CHOWDHARY</h6>
                    <p>
                      1999 Batch
                      <br />
                      MEMBER
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/pawan.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ PAWAN BERI</h6>
                    <p>
                      2000 Batch
                      <br />
                      MEMBER
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/abhishek.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ ABHISHEK BASAK</h6>
                    <p>
                      2000 Batch
                      <br />
                      MEMBER
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/vivek-mehra.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ VIVEK MEHRA</h6>
                    <p>
                      2001 Batch
                      <br />
                      MEMBER
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/XJ-anurag.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ ANURAG GOYAL</h6>
                    <p>
                      1999 Batch
                      <br />
                      MEMBER (Co-Opted)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/XJ-abhinav.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ ABHINAV KM</h6>
                    <p>
                      2001 Batch
                      <br />
                      MEMBER (Co-Opted)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/XJ-shikha.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ SHIKHA DAS</h6>
                    <p>
                      2001 Batch
                      <br />
                      MEMBER (Co-Opted)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/XJ-kartikanand.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ KARTIKANAND JAISWAL</h6>
                    <p>
                      2001 Batch
                      <br />
                      MEMBER (Co-Opted)
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/XJ-Tushar.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ TUSHAR AGRAWAL</h6>
                    <p>
                      1999 Batch
                      <br />
                      MEMBER (Special Invitees)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/XJ-Ankur.png" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ ANKUR GUPTA</h6>
                    <p>
                      1999 Batch
                      <br />
                      MEMBER (Special Invitees)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/XJ-Jaideep.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ JAIDEEP SINGH</h6>
                    <p>
                      1993 Batch
                      <br />
                      MEMBER (Special Invitees)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-md-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage">
                    <img src="/images/managing/XJ-Ritesh.jpg" alt="" loading="lazy"/>
                  </div>
                  <div className="committeeMemberDetails">
                    <h6>XJ RITESH TIBREWAL</h6>
                    <p>
                      1997 Batch
                      <br />
                      MEMBER (Special Invitees)
                    </p>
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
