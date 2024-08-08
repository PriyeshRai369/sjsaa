export default function Footer() {
    let date = new Date().getFullYear()
  return (
    <section className="">
      <div className="footerContainer">
        <div className="container">
          <div className="row row-gap-3">
            <div className="col-lg-4 text-center">
              <div className="footerLogoContainer">
                <img src="/images/alumni.png" alt="" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, delectus. Numquam illum ipsa harum recusandae.
                </p>
                <h3>Follow Us On</h3>
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
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div className="footerLinksContainers">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Alumni</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div className="footerLinksContainers">
                <h3>Contact US</h3>
                <lord-icon
                  src="https://cdn.lordicon.com/mahizafr.json"
                  trigger="hover"
                  colors="primary:#171717,secondary:#171717"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>{" "}
                <span className="mobNo">+91 1234567890</span>
                <br />
                <lord-icon
                  src="https://cdn.lordicon.com/aycieyht.json"
                  trigger="hover"
                  colors="primary:#171717,secondary:#171717"
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
            <p>  Copyright @ {date} <span>St. Jhon&apos;s School Alumni Association</span> | Made With ❤ By <span>Wizards.</span></p>
        </div>
    </section>
  );
}
