import React from "react";
import Fancybox from "../ImageZoom/Fancybox";

export default function Achievers() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Our Achievers</h1>
        </div>
        <div className="row row-gap-5">
          <div className="col-lg-12">
            <div className="achieversContainer">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                  <Fancybox>
                    <div
                      className="achieveImg"
                      data-fancybox="gallery"
                      href="/images/invitation.jpg"
                    >
                      <img src="/images/invitation.jpg" alt="" loading="lazy"/>
                    </div>
                  </Fancybox>
                </div>
                <div className="col-lg-9 col-md-8 col-12">
                  <h2>
                    Proud moment for us. Because of XJ Sanjeeva Singh 1982
                    Batch.
                  </h2>
                  <p>
                    We are thrilled to announce that our esteemed alumnus, Mr.
                    Sanjeeva Singh, has been nominated to receive the "Champions
                    for Change" Award at the Paris Olympic Games on August 10th,
                    2024. This prestigious award, presented by the University of
                    London, honours his remarkable contributions and dedication
                    to the sport of archery. Mr. Singh will be joined by his
                    batchmates, Gurdeep Pal and Sunil Lala, making this
                    momentous occasion even more special. We extend our
                    heartfelt congratulations and best wishes to Mr. Singh for
                    this well-deserved recognition. Let's celebrate this
                    incredible achievement and cheer for Mr. Singh as he
                    continues to inspire and uplift the sports community!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="achieversContainer">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                  <Fancybox>
                    <div
                      className="achieveImg"
                      data-fancybox="gallery"
                      href="/images/achievers/01.jpg"
                    >
                      <img src="/images/achievers/01.jpg" alt="" loading="lazy"/>
                    </div>
                  </Fancybox>
                </div>
                <div className="col-lg-9 col-md-8 col-12">
                  <h2>
                    Dainik Jagran Achiever Award was given to XJ Manoj Kumar Shah
                  </h2>
                  <p>
                    Happy to inform that Dainik Jagran Achiever Award was given
                    to XJ Manoj Kumar Shah in the Healthcare Category and to his
                    wife Dr Shalini Shah in the Education & Women Empowerment
                    Category. <br /> This award was given at the annual celebration
                    organized by Jagran at Baku, Azerbaijan last evening.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
