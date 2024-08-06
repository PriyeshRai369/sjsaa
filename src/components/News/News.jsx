export default function News() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>News Articles & Blogs</h1>
        </div>
        <div className="row row-gap-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="newsContainer">
              <div className="newsImageContainer">
                <img src="/images/news/01.webp" alt="" />
              </div>
              <div className="newsHeading">
                <p><a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit!</a></p>
              </div>
              <div className="newsDetails">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quasi deserunt earum consequuntur ex eum eius molestias accusantium labore ipsum cumque debitis, nisi aliquam non rem odio mollitia nemo consectetur. <span className="rdMore">Read More</span> </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="newsContainer">
              <div className="newsImageContainer">
                <img src="/images/news/02.webp" alt="" />
              </div>
              <div className="newsHeading">
                <p><a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit!</a></p>
              </div>
              <div className="newsDetails">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quasi deserunt earum consequuntur ex eum eius molestias accusantium labore ipsum cumque debitis, nisi aliquam non rem odio mollitia nemo consectetur.<span className="rdMore">Read More</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="newsContainer">
              <div className="newsImageContainer">
                <img src="/images/news/04.webp" alt="" />
              </div>
              <div className="newsHeading">
                <p><a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit!</a></p>
              </div>
              <div className="newsDetails">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quasi deserunt earum consequuntur ex eum eius molestias accusantium labore ipsum cumque debitis, nisi aliquam non rem odio mollitia nemo consectetur. <span className="rdMore">Read More</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="newsContainer">
              <div className="newsImageContainer">
                <img src="/images/news/05.jpg" alt="" />
              </div>
              <div className="newsHeading">
                <p><a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit!</a></p>
              </div>
              <div className="newsDetails">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quasi deserunt earum consequuntur ex eum eius molestias accusantium labore ipsum cumque debitis, nisi aliquam non rem odio mollitia nemo consectetur. <span className="rdMore">Read More</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="newsContainer">
              <div className="newsImageContainer">
                <img src="/images/news/03.jfif" alt="" />
              </div>
              <div className="newsHeading">
                <p><a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, velit!</a></p>
              </div>
              <div className="newsDetails">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quasi deserunt earum consequuntur ex eum eius molestias accusantium labore ipsum cumque debitis, nisi aliquam non rem odio mollitia nemo consectetur. <span className="rdMore">Read More</span></p>
              </div>
            </div>
          </div>
        </div>
        <button className="viewMoreBtn mt-5">View More</button>
      </div>
    </section>
  );
}
