import React from 'react'
import Fancybox from '../ImageZoom/Fancybox'
import { agmImages } from '../../helper/agm'

export default function AGMElection() {
  return (
    <section className='sectionContainer'>
      <div className="container">
        <div className="title">
          <h1>Images From AGM Election.</h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="galleryAllImageContainer">
              {agmImages.map((image) => (
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
  )
}
