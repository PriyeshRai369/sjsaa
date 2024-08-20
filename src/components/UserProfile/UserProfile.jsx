import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../OurAlumni/Data";
import axios from "axios";

export default function UserProfile() {
  const [memberData,setMemberData] = useState([])
  const {id} = useParams()
  const profile = memberData.find((member) => member.membernace === id);


  useEffect(() => {
    async function fetchMember() {
      try {
        const response = await axios.get(
          "https://www.gdsons.co.in/draft/sjs/all-members"
        );
        setMemberData(response?.data)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMember()
  }, []);
  
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="userProfileContainer">
              <div
                className="profileBannerContainer"
                style={{
                  backgroundImage:
                    "url('/images/profile-banner/profile-banner.jpg')",
                }}
              >
                {/* <img src="/images/profile-banner/profile-banner.jpg" alt="" /> */}
              </div>
              <div className="userProfilePic">
                <img src="/images/faculity/02.jpg" alt="" />
              </div>
              <div className="userNameContainer">
                <div className="row row-gap-3">
                  <div className="col-lg-6">
                    <h3>{profile?.membernace}</h3>
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
                    <div className="buttonContainer">
                      <button>Message</button>
                      <button>Call</button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="summary">
                      <h6>About Me</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque amet aliquid quis modi nulla saepe debitis illo ad
                        laborum possimus necessitatibus tempore eaque tempora
                        sapiente enim ipsam beatae pariatur tenetur, nemo aut
                        aperiam maxime assumenda. Atque mollitia molestias earum
                        quia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sunt cupiditate alias deserunt, distinctio voluptas animi a error optio amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
