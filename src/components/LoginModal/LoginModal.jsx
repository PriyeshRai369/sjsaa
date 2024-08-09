import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function LoginModal() {
  const { setLoginModal } = useContext(Context);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, seetShowPassword] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  }

  return (
    <section className="loginModalContainer">
      <div className="formContainer ">
        <div className="LoginTitle">
          <h1>Login</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Eg: xyz@gmail.com"
              onChange={handleChange}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
            />
            {showPassword ? (
              <img src="/images/eye-closed.svg" alt="" className="eyes"  onClick={()=>seetShowPassword(!showPassword)}/>
            ) : (
              <img src="/images/eye-open.svg" alt="" className="eyes" onClick={()=>seetShowPassword(!showPassword)} />
            )}
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="modalCloseBtn" onClick={() => setLoginModal(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </section>
  );
}
