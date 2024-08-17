import { Link } from "react-router-dom";
import Fancybox from "../ImageZoom/Fancybox";
import { scrollToTop } from "../../helper/scroll";
export default function Stories() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Gallery</h1>
        </div>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        > 
          <div className="row row-gap-5">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"  data-fancybox="gallery" href="/images/party/01.jpeg">
                <img src="/images/party/01.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/02.jpeg">
                <img src="/images/party/02.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/03.jpeg">
                <img src="/images/party/03.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/04.jpeg">
                <img src="/images/party/04.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/05.jpeg">
                <img src="/images/party/05.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/06.jpeg">
                <img src="/images/party/06.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/07.jpeg">
                <img src="/images/party/07.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/08.jpeg">
                <img src="/images/party/08.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/09.jpeg">
                <img src="/images/party/09.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="storyImgContainer"data-fancybox="gallery" href="/images/party/10.jpeg">
                <img src="/images/party/10.jpeg" alt="" loading="lazy"/>
              </div>
            </div>
          </div>
        </Fancybox>
        <Link to={"/gallery"} onClick={scrollToTop}>
          <button className="viewMoreBtn" style={{ marginTop: "50px" }}>
            View More Images
          </button>
        </Link>
      </div>
    </section>
  );
}
