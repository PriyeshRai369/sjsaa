import React from "react";

export default function ManagingCommittee() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Managing Committee</h1>
        </div>
        <div className="row row-gap-3">
          <div className="col-lg-4 col-md-6 col-sm-6 ">
            <div className="committeeContainer">
              <div className="committeeMemberImage">
                <img src="/images/managing/chairman.jpg" alt="" />
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
                <img src="/images/managing/Vice-Chairman.jpg" alt="" />
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
                <img src="/images/managing/Vice-Chairman-02.png" alt="" />
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
                  <img src="/images/managing/President.png" alt="" />
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
                  <img src="/images/managing/Vice-President.jpg" alt="" />
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
                  <img src="/images/managing/Secretary.jpg" alt="" />
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
                  <img src="/images/managing/Treasurer.png" alt="" />
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
            </div>
          </div>
        </div>
        <button className="viewMoreBtn" style={{marginTop:"50px"}}>View More Members</button>
      </div>
    </section>
  );
}
