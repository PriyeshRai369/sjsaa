import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
      if (window.scrollY > 170) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }

      if (window.scrollY > 100) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logoContainer">
          <p><span>St John&apos;s School</span> Alumni Assocation</p>
          {/* <img src="/images/alumni.png" alt="" /> */}
        </div>

        <div className={`linksContainer ${isOpened && 'open'}`}>
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? "act" : "navLinks"}`}
              onClick={()=>setIsOpened(false)}
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/our-alumni"
              className={({ isActive }) => `${isActive ? "act" : "navLinks"}`}
              onClick={()=>setIsOpened(false)}
            >
              Our Alumnis
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/about-us"
              className={({ isActive }) => `${isActive ? "act" : "navLinks"}`}
              onClick={()=>setIsOpened(false)}
            >
              About US
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/event"
              className={({ isActive }) => `${isActive ? "act" : "navLinks"}`}
              onClick={()=>setIsOpened(false)}
            >
              Events
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/gallery"
              className={({ isActive }) => `${isActive ? "act" : "navLinks"}`}
            >
              Gallery
            </NavLink>
          </div>

          {/* <div>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${isActive ? "act" : "navLinks"}`}
            >
              Contact
            </NavLink>
          </div> */}
        </div>

        <div className="menuBtnContainer">
          <button
            id="menuBtns"
            className={isOpened ? "opened menu" : "menu"}
            aria-expanded={isOpened}
            onClick={handleToggle}
            aria-label="Main Menu"
          >
            <svg width="50" height="50" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>

        {/* <div className="btnContainer">
            <button>Login</button>
        </div> */}
      </nav>
    </header>
  );
}
