import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
