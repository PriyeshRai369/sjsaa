import React, { useState } from "react";

export default function Profile() {
  const [isFormEditable, setIsFormEditable] = useState(false);

  function handleEdit() {
    setIsFormEditable((prevState) => !prevState);
  }

  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row row-gap-5">
          <div className="col-lg-5">
            <div className="profileContainer">
              <div className="profileImageContainer">
                <div
                  className="profileBanner"
                  style={{
                    backgroundImage:
                      "url('/images/profile-banner/profile-banner.jpg')",
                  }}
                ></div>
                <div className="profileImage">
                  <img src="/images/faculity/02.jpg" alt="" />
                </div>
                <div className="nameContainer">
                  <h3>Mrs. Angla Yu</h3>
                  <p>A Full Stack Developer</p>
                  <p>Sigra, Varansi, Uttar Pradesh</p>
                  <div className="socialMediaIcons">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-solid fa-link"></i>
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
                    <input
                      type="text"
                      placeholder="First Name"
                      disabled={!isFormEditable}
                    />
                    <input
                      type="text"
                      placeholder="Second Name"
                      disabled={!isFormEditable}
                    />
                    <input
                      type="text"
                      placeholder="Instagram link"
                      disabled={!isFormEditable}
                    />
                    <input
                      type="text"
                      placeholder="Twitter Link"
                      disabled={!isFormEditable}
                    />
                    <input
                      type="text"
                      placeholder="Facebook Link"
                      disabled={!isFormEditable}
                    />
                    <input
                      type="text"
                      placeholder="Linkedin Link"
                      disabled={!isFormEditable}
                    />
                    <input
                      type="text"
                      placeholder="Whatsapp Link"
                      disabled={!isFormEditable}
                    />
                    <input
                      type="text"
                      placeholder="My Website Link"
                      disabled={!isFormEditable}
                    />
                    <input
                      className="largeInput"
                      type="text"
                      placeholder="My Profession"
                      disabled={!isFormEditable}
                    />
                    <input
                      className="largeInput"
                      type="text"
                      placeholder="My Address"
                      disabled={!isFormEditable}
                    />
                    <textarea
                      name="aboutme"
                      placeholder="About Me"
                      disabled={!isFormEditable}
                    ></textarea>
                    <label htmlFor="profile">Upload Profile Pic</label>
                    <input
                      id="profile"
                      className="largeInput"
                      type="file"
                      disabled={!isFormEditable}
                    />
                    <label htmlFor="banner">Upload Banner Image</label>
                    <input
                      id="banner"
                      className="largeInput"
                      type="file"
                      disabled={!isFormEditable}
                    />

                    <button type="button" onClick={handleEdit}>
                      {isFormEditable ? "Cancel" : "Edit Profile"}
                    </button>
                    {isFormEditable && (
                      <>
                        <button type="submit">Save</button>
                        <button type="reset">Reset</button>
                      </>
                    )}
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
