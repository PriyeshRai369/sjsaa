import { Link } from "react-router-dom";

export default function Footer() {
    let date = new Date().getFullYear()
  return (
    <section className="">
      <div className="footerContainer">
        <div className="container">
          <div className="row row-gap-3">
            <div className="col-lg-6 col-md-8 col-sm-6 text-center">
              <div className="footerLogoContainer">
                <img src="/images/school_logo.png" alt="" />
                <p style={{textAlign:"justify"}}>
                Welcome to the St John's School Alumni Association, a vibrant community that brings together generations of proud graduates from St John's School, B.L.W, Varanasi. Since its inception in 1963, St John's School has been a beacon of academic excellence and holistic development, shaping the lives of countless students who have gone on to excel in various fields.
                </p>
                {/* <h3>Follow Us On</h3>
                <div className="footerSocialMedia">
                  <lord-icon
                    src="https://cdn.lordicon.com/iqagrlso.json"
                    trigger="hover"
                    state="hover-draw"
                    colors="primary:#171717,secondary:#171717"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/mdyiqybm.json"
                    trigger="hover"
                    state="hover-draw"
                    colors="primary:#171717,secondary:#171717"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/ogbssbzd.json"
                    trigger="morph"
                    state="morph-logotype"
                    colors="primary:#171717,secondary:#171717"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/cywksamr.json"
                    trigger="morph"
                    state="hover-draw"
                    colors="primary:#171717,secondary:#171717"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/zkyoxhhn.json"
                    trigger="hover"
                    state="hover-jump"
                    colors="primary:#171717,secondary:#171717"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                </div> */}
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footerLinksContainers">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About-Us</a>
                  </li>
                  <li>
                    <a href="#">Members</a>
                  </li>
                  <li>
                    <a href="#">Engage</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 ">
              <div className="footerLinksContainers">
                <h3>Contact US</h3>
                <lord-icon
                  src="https://cdn.lordicon.com/mahizafr.json"
                  trigger="hover"
                  colors="primary:#fab341,secondary:#fab341"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>{" "}
                <span className="mobNo">+91 1234567890</span>
                <br />
                <lord-icon
                  src="https://cdn.lordicon.com/aycieyht.json"
                  trigger="hover"
                  colors="primary:#fab341,secondary:#fab341"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>{" "}
                <span className="mobNo">test@gmail.com</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  nesciunt rerum reiciendis consequatur pariatur nisi molestias
                  doloribus atque voluptatibus illum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="endSection">
            <p>  Copyright @ {date} <span>St. John&apos;s School Alumni Association</span> | Made With <i className="fa-solid fa-heart" style={{color:"#C40C0C"}}></i> By <Link to="https://wizards.co.in/" target="_blank"><span>Wizards.</span></Link></p>
        </div>
    </section>
  );
}
