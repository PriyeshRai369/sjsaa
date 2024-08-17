import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helper/scroll";

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Gallery Album</h1>
        </div>
        <div className="row row-gap-5">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="albumContainer">
              <div className="albumImage">
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 0 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(0)}
                >
                  <img src="/images/party/08.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 1 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(1)}
                >
                  <img src="/images/party/07.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 2 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(2)}
                >
                  <img src="/images/party/06.jpeg" alt="" />
                </div>
              </div>
              <div className="albumTitle">
                <h4>Enjoying Movie</h4>
              </div>
              <div className="viewBtn">
                <Link to="movie-gallery">
                  <button className="view-more-btn" onClick={scrollToTop}>View More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="albumContainer">
              <div className="albumImage">
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 3 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(3)}
                >
                  <img src="/images/party/01.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 4 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(4)}
                >
                  <img src="/images/party/03.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 5 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(5)}
                >
                  <img src="/images/party/agm-election.jpg" alt="" />
                </div>
              </div>
              <div className="albumTitle">
                <h4>AGM Elections Images</h4>
              </div>
              <div className="viewBtn">
                <Link to="agm-election-gallery">
                  <button className="view-more-btn" onClick={scrollToTop}>View More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="albumContainer">
              <div className="albumImage">
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 4 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(4)}
                >
                  <img src="/images/party/bday/01.jpg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 5 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(5)}
                >
                  <img src="/images/party/bday/02.jpg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 6 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(6)}
                >
                  <img src="/images/party/bday/03.jpg" alt="" />
                </div>
              </div>
              <div className="albumTitle">
                <h4>Birthday Celebration of XJ Sanjeev Jaipuria</h4>
              </div>
              <div className="viewBtn">
                <Link to="#">
                  <button className="view-more-btn">View More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="albumContainer">
              <div className="albumImage">
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 7 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(7)}
                >
                  <img src="/images/party/quick-bytes/01.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 8 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(8)}
                >
                  <img src="/images/party/quick-bytes/02.jpeg" alt="" />
                </div>
                <div
                  className={`albumImageContainer ${
                    hoveredImage === 9 ? "hover" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(9)}
                >
                  <img src="/images/party/quick-bytes/03.jpg" alt="" />
                </div>
              </div>
              <div className="albumTitle">
                <h4>Grand Opening Of Quick Bytes.</h4>
              </div>
              <div className="viewBtn">
                <Link to="#">
                  <button className="view-more-btn">View More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
