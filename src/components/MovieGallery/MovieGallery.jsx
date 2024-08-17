import React, { useEffect, useRef, useState } from "react";
import { movieImages } from "../../helper/movieImageSrc";
import Fancybox from "../ImageZoom/Fancybox";

export default function MovieGallery() {

  return (
    <section className="sectionContainer" >
      <div className="container">
        <div className="title">
          <h1>All Pics From Auron Mein Kahan Dum Tha Movie.</h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="galleryAllImageContainer">
              {movieImages.map((image) => (
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <div
                    className="imageGrid"
                    key={image.id}
                    data-fancybox="gallery"
                    href={image.src}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy"/>
                  </div>
                </Fancybox>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
