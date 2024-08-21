import { lazy, Suspense, useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import LoginModal from "../LoginModal/LoginModal";
import { Context } from "../../context/Context";
import { scrollToTop } from "../../helper/scroll.js";
import Loader from "../Loader/Loader.jsx";
const LoginModal = lazy(() => import("../LoginModal/LoginModal"));

gsap.registerPlugin(useGSAP);

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const headerRef = useRef(null);
  const [dropDownOpen, setDropOpen] = useState(false);
  const [memberDropDownOpen, setMemberDropDownOpen] = useState(false);
  const { loginModal, setLoginModal, container } = useContext(Context);
  const linkRef = useRef();
  const handleToggle = () => {
    setIsOpened(!isOpened);
    setDropOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 200) {
          headerRef.current.classList.add("fixed");
        } else {
          headerRef.current.classList.remove("fixed");
        }

        if (window.scrollY > 130) {
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

  // useEffect(() => {
  //   const handleScrollnew = () => {
  //     if (upperHeaderRef.current) {
  //       if (window.scrollY > 200 && window.innerWidth < 950) {
  //         upperHeaderRef.current.classList.add("fixed");
  //         linkRef.current.classList.add("scrolledMenu");
  //       } else {
  //         upperHeaderRef.current.classList.remove("fixed");
  //         linkRef.current.classList.remove("scrolledMenu");
  //       }

  //       if (window.scrollY > 130 && window.innerWidth < 950) {
  //         upperHeaderRef.current.classList.add("hidden");
  //       } else {
  //         upperHeaderRef.current.classList.remove("hidden");
  //       }
  //     }
  //   };

  //   const handleResize = () => {
  //     if (window.innerWidth >= 950) {
  //       upperHeaderRef.current.classList.remove("fixed", "hidden");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScrollnew);
  //   window.addEventListener("resize", handleResize);
  //   handleScrollnew();
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollnew);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [linkRef, upperHeaderRef]);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();

  //     const logo = document
  //       .querySelector(".logoText")
  //       .textContent.split("")
  //       .map((val) => (val === " " ? "&nbsp;" : `<span>${val}</span>`))
  //       .join("");
  //     // console.log(logo);

  //     document.querySelector(".logoText").innerHTML = logo;
  //     tl.from(".logoText span", {
  //       opacity: 0,
  //       delay: 0.5,
  //       duration: 0.5,
  //       stagger: 0.09,
  //     });
  //     tl.from(".secondLogo", {
  //       duration: 0.5,
  //       opacity: 0,
  //     });
  //     gsap.from(".btnContainer", {
  //       delay: 1.2,
  //       y: -50,
  //       duration: 0.5,
  //       opacity: 0,
  //     });

  //     gsap.from(".lkns", {
  //       delay: 1,
  //       y: -50,
  //       duration: 0.8,
  //       opacity: 0,
  //       stagger: 0.1,
  //     });
  //   },
  //   { scope: container }
  // );
  useEffect(() => {
    if (loginModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [loginModal]);

  return (
    <header className="header" ref={container}>
      {/* <div className="upperHeader" ref={upperHeaderRef}>
        <div className="logoContainer">
          <Link to={'/'}>
          <p>
            <span className="logoText">St John&apos;s School</span>
            <span className="secondLogo">Alumni Association</span>
          </p>
          </Link>
        </div>
        <div className="btnContainer">
          <button className="loginBtn" onClick={()=>setLoginModal(true)}>Login</button>
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
        </div>
      </div> */}
      <nav className="nav" ref={headerRef}>
        <div className="logoContainer" onClick={scrollToTop}>
          <Link to={"/"}>
            <div className="logoImg">
              <img src="/images/8.png" alt="" />
            </div>
            <div className="textLogoContainer">
              <p>
                <span className="logoText">St John&apos;s School</span>
                <span className="secondLogo">Alumni Association</span>
              </p>
            </div>
          </Link>
        </div>
        <div
          className={`linksContainer ${isOpened ? "open" : ""}`}
          ref={linkRef}
        >
          <div className="lkns">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => {
                setIsOpened(false);
                setDropOpen(false);
                scrollToTop();
                setMemberDropDownOpen(false);
              }}
            >
              Home
            </NavLink>
          </div>
          {/* <div style={{width:"2px",height:"40px",backgroundColor:"black"}}></div> */}
          <div className="lkns">
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => {
                setIsOpened(false);
                setDropOpen(false);
                scrollToTop();
                setMemberDropDownOpen(false);
              }}
            >
              About Us
            </NavLink>
          </div>
          {/* <div style={{width:"2px",height:"40px",backgroundColor:"black"}}></div> */}
          <div className="lkns">
            <div
              className="navLinks"
              onClick={() => {
                setDropOpen(false);
                setMemberDropDownOpen(!memberDropDownOpen);
              }}
            >
              Members
              <i
                class="fa-solid fa-angle-right"
                style={{
                  transform: `${
                    !memberDropDownOpen
                      ? "rotate(90deg) translateY(-5px)"
                      : "rotate(-90deg) translateY(6px)"
                  }`,
                  color: `${
                    !memberDropDownOpen
                      ? "var(--text-color)"
                      : "var(--third-color)"
                  }`,
                }}
              ></i>
            </div>
            <ul
              className="memberDropDown"
              style={{
                display: `${memberDropDownOpen ? "block" : "none"}`,
                transition: "all 0.5s",
              }}
            >
              <li
                onClick={() => {
                  setMemberDropDownOpen(false);
                  scrollToTop();
                  setIsOpened(false);
                }}
              >
                <Link to="/new-member-registration">New Member Registration</Link>{" "}
              </li>
              <li
                onClick={() => {
                  setMemberDropDownOpen(false);
                  scrollToTop();
                  setIsOpened(false);
                }}
              >
                <Link to="/our-alumni">All Alumni List</Link>
              </li>
            </ul>
          </div>
          {/* <div style={{width:"2px",height:"40px",backgroundColor:"black"}}></div> */}
          {/* <div className="lkns">
            <div
              className="navLinks"
              onClick={() => {
                setDropOpen(!dropDownOpen);
                setMemberDropDownOpen(false);
              }}
            >
              Engage{" "}
              <i
                class="fa-solid fa-angle-right"
                style={{
                  transform: `${
                    !dropDownOpen ? "rotate(90deg)" : "rotate(-90deg)"
                  }`,
                  color: `${
                    !dropDownOpen ? "var(--text-color)" : "var(--third-color)"
                  }`,
                }}
              ></i>
            </div>
            <ul
              className="dropDownContainer"
              style={{
                display: `${dropDownOpen ? "block" : "none"}`,
                transition: "all 0.5s",
              }}
            >
              <li>Share Achivements</li>
              <li>Share Opportunity</li>
            </ul>
          </div> */}
          {/* <div style={{width:"2px",height:"40px",backgroundColor:"black"}}></div> */}
          <div className="lkns">
            <NavLink
              to="/event"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => {
                setIsOpened(false);
                setDropOpen(false);
                scrollToTop();
                setMemberDropDownOpen(false);
              }}
            >
              Events
            </NavLink>
          </div>
          {/* <div style={{width:"2px",height:"40px",backgroundColor:"black"}}></div> */}
          <div className="lkns">
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "act" : "navLinks")}
              onClick={() => {
                setIsOpened(false);
                setDropOpen(false);
                scrollToTop();
                setMemberDropDownOpen(false);
              }}
            >
              Gallery
            </NavLink>
          </div>
        </div>
        <div className="btnContainer">
          <button className="loginBtn" onClick={() => setLoginModal(true)}>
            Login
          </button>

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
        </div>
      </nav>
      <Suspense fallback={<Loader />}>{loginModal && <LoginModal />}</Suspense>
    </header>
  );
}
