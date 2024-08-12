import React from "react";

export default function ManagingCommittee() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Managing Committee</h1>
        </div>
        <div className="row row-gap-3">
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <div className="committeeContainer">
              <div className="committeeMemberImage"></div>
              <div className="committeeMemberDetails">
                <h3>Raj Kumar Agrawal</h3>
                <p>1984 Batch<br /> Chief Mentor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <div className="committeeContainer">
              <div className="committeeMemberImage"></div>
              <div className="committeeMemberDetails">
                <h3>Abhinav Pandey</h3>
                <p>1999 Batch<br /> President</p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row row-gap-3">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="committeeContainer">
                  <div className="othersMembersImage"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
