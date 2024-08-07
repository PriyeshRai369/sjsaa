import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const headerRef = useRef(null);
  const container = useRef();

  const handleToggle = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 170) {
          headerRef.current.classList.add("fixed");
        } else {
          headerRef.current.classList.remove("fixed");
        }

        if (window.scrollY > 100) {
          headerRef.current.classList.add("hidden");
        } else {
          headerRef.current.classList.remove("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const logo = document
        .querySelector(".logoText")
        .textContent.split("")
        .map((val) => (val === " " ? "&nbsp;" : `<span>${val}</span>`))
        .join("");
      // console.log(logo);

      document.querySelector('.logoText').innerHTML = logo
      tl.from('.logoText span',{
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.09,
      })
      tl.from('.secondLogo',{
        duration:0.5,
        opacity:0
      })

      gsap.from(".lkns",{
        delay:1,
        y:-50,
        duration:0.8,
        opacity:0,
        stagger:0.1
      })



    },
    { scope: container }
  );

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav" ref={container}>
        <div className="logoContainer">
          <p>
            <span className="logoText">St John&apos;s School</span> 
            <span className="secondLogo">Alumni Association</span>
          </p>
          {/* <img src="/images/alumni.png" alt="" /> */}
        </div>

        <div className={`linksContainer ${isOpened ? "open" : ""}`}>
          <div className="lkns">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => setIsOpened(false)}
            >
              Home
            </NavLink>
          </div>
          <div className="lkns">
            <NavLink
              to="/our-alumni"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => setIsOpened(false)}
            >
              Our Alumni
            </NavLink>
          </div>
          <div className="lkns">
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => setIsOpened(false)}
            >
              About Us
            </NavLink>
          </div>
          <div className="lkns">
            <NavLink
              to="/event"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => setIsOpened(false)}
            >
              Events
            </NavLink>
          </div>
          <div className="lkns">
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => setIsOpened(false)}
            >
              Gallery
            </NavLink>
          </div>
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
      </nav>
    </header>
  );
}
