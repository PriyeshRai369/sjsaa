import React from "react";

export default function Profile() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row row-gap-5">
          <div className="col-lg-5">
            <div className="profileContainer">
              <div className="profileImageContainer">
                <div className="profileImage">
                  <img src="/images/faculity/02.jpg" alt="" />
                </div>
                <div className="nameContainer">
                  <h3>Mrs. Angla Yu</h3>
                  <p>A Full Stack Developer</p>
                  <p>Sigra,varansi, Uttar Pradesh</p>
                  <div className="socialMediaIcons">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-solid fa-link"></i>
                  </div>
                </div>
                <div
                  style={{ width: "100%", height: "2px", background: "black" }}
                ></div>
                <div className="summary">
                  <h6>About Me</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque amet aliquid quis modi nulla saepe debitis illo ad
                    laborum possimus necessitatibus tempore eaque tempora
                    sapiente enim ipsam beatae pariatur tenetur, nemo aut
                    aperiam maxime assumenda. Atque mollitia molestias earum
                    quia.
                  </p>
                </div>
                <div className="buttonContainer">
                  <button>Message</button>
                  <button>Call</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="profileEditContainer">
              <div className="profileFormContainer">
                <div className="editTitle">
                  <h3>Edit Your Profile</h3>
                </div>

                <div className="editForm">
                <form>
                  <input type="text" placeholder="First Name"/>
                  <input type="text" placeholder="Second Name"/>
                  <input  type="text" placeholder="Instagram link" />
                  <input type="text" placeholder="Twitter Link" />
                  <input type="text" placeholder=" Facebook Link" />
                  <input  type="text" placeholder="Linkedin Link" />
                  <input type="text" placeholder=" Whatsapp Link" />
                  <input  type="text" placeholder="My Website Link" />
                  <input className="largeInput" type="text" placeholder="My Profession" />
                  <input className="largeInput" type="text" placeholder="My Address" />
                  <textarea name="aboutme" id="" placeholder="About Me"></textarea>

                  <button>Edit</button>
                  <button type="submit">Save</button>
                  <button type="reset">Reset</button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
