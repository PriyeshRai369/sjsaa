import React, { useState } from "react";

export default function RegistrationForm() {
  const [profilePic, setProfilePic] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    batch: "",
    email: "",
    contactNo: "",
    dob: "",
    location: "",
    qualification: "",
    house: "",
    career: "",
    spouse: "",
    children: "",
    wedding: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSubmitBtn = () => {
    // console.log(userData);
    // console.log(profilePic);
  };

  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>New Member Registration Form</h1>
        </div>
        <div className="row row-gap-4 ">
          <div className="col-lg-12">
            <div className="regFormContainer">
              <div className="row">
                <div className="col-lg-9">
                  <div className="row row-gap-4">
                    <div className="col-lg-6">
                      <label htmlFor="name">
                        Name<sup>*</sup>{" "}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="batch">
                        Batch<sup>*</sup>{" "}
                      </label>
                      <input
                        type="text"
                        id="batch"
                        name="batch"
                        placeholder="Batch Ex :- 1998"
                        value={userData.batch}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="email">
                        Email<sup>*</sup>{" "}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="contactNo">
                        Contact No<sup>*</sup>{" "}
                      </label>
                      <input
                        type="text"
                        id="contactNo"
                        name="contactNo"
                        placeholder="+91 1234567890"
                        value={userData.contactNo}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="dob">
                        DOB<sup>*</sup>{" "}
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={userData.dob}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="location">
                        Location<sup>*</sup>{" "}
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Your Location"
                        value={userData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <label htmlFor="profile">
                    Profile Pic<sup>*</sup>
                  </label>
                  <div
                    className="reg-profile-pic"
                    style={{
                      backgroundImage: profilePic
                        ? `url(${profilePic})`
                        : "none",
                    }}
                  >
                    <input
                      type="file"
                      name="profile"
                      id="profile"
                      onChange={handleFileChange}
                      style={{
                        opacity: 0,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <span>200w X 250h</span>
                </div>

                <div className="col-lg-4 mt-5">
                  <label htmlFor="qualification">Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    placeholder="Your Qualification"
                    value={userData.qualification}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-lg-4 mt-5">
                  <label htmlFor="career">Current career/position</label>
                  <input
                    type="text"
                    id="career"
                    name="career"
                    placeholder="Current career/position"
                    value={userData.career}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-lg-4 mt-5">
                  <label htmlFor="house">House you belonged</label>
                  <select
                    name="house"
                    id="house"
                    value={userData.house}
                    onChange={handleInputChange}
                  >
                    <option value="">---Select House---</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                  </select>
                </div>

                <div className="col-lg-4 mt-3">
                  <label htmlFor="spouse">Name of spouse</label>
                  <input
                    type="text"
                    id="spouse"
                    name="spouse"
                    placeholder="Name of spouse"
                    value={userData.spouse}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-lg-4 mt-3">
                  <label htmlFor="children">Name of Children</label>
                  <input
                    type="text"
                    id="children"
                    name="children"
                    placeholder="Name of Children"
                    value={userData.children}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-lg-4 mt-3">
                  <label htmlFor="wedding">Wedding Date</label>
                  <input
                    type="date"
                    id="wedding"
                    name="wedding"
                    placeholder="Wedding Date"
                    value={userData.wedding}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-lg-12 mt-3">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="regSubmitBtn">
                <button onClick={handleSubmitBtn}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
