import { Link } from "react-router-dom";

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <section className="">
      <div className="footerContainer">
        <div className="container">
          <div className="row row-gap-3">
            <div className="col-lg-6 col-md-8 col-sm-6 text-center">
              <div className="footerLogoContainer">
                <img src="/images/school_logo.png" alt="" />
                <p style={{ textAlign: "justify" }}>
                  Welcome to the St John's School Alumni Association, a vibrant
                  community that brings together generations of proud graduates
                  from St John's School, B.L.W, Varanasi. Since its inception in
                  1963, St John's School has been a beacon of academic
                  excellence and holistic development, shaping the lives of
                  countless students who have gone on to excel in various
                  fields.
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
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about-us">About-Us</a>
                  </li>
                  <li>
                    <a href="#">Members</a>
                  </li>
                  <li>
                    <a href="/event">Events</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 ">
              <div className="footerLinksContainers">
                <h3>Contact US</h3>
                <span className="mobNo"><i class="fa-solid fa-phone" style={{color:"var(--third-color)"}}></i>&nbsp; +91 1234567890</span>
                <br />
                
                <span className="mobNo"><i class="fa-solid fa-at" style={{color:"var(--third-color)"}}></i>&nbsp; sjsaadlwvns@gmail.com</span>
                <p>
                <i class="fa-solid fa-location-dot" style={{color:"var(--third-color)"}}></i>&nbsp; School Off: BLW, Varanasi, Uttar Pradesh 221004, India
                  <br />
                  <br />
                  <i class="fa-solid fa-location-dot" style={{color:"var(--third-color)"}}></i>&nbsp; Admin Off: c/o 20, Lajpat Nagar, Maldhaiya Station Road,
                  Varanasi – 221001.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="endSection">
        <p>
          {" "}
          Copyright @ {date}{" "}
          <span>St. John&apos;s School Alumni Association</span> | Made With{" "}
          <i className="fa-solid fa-heart" style={{ color: "#C40C0C" }}></i> By{" "}
          <Link to="https://wizards.co.in/" target="_blank">
            <span>Wizards.</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
