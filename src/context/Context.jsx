import { createContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";


export const Context = createContext();

gsap.registerPlugin(useGSAP);

export default function ContextProvider({ children }) {
  const [loginModal, setLoginModal] = useState(false);
  const container = useRef();
  const aboutRef = useRef()
  const [loading,setLoading] = useState(false)
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const logo = document
        .querySelector(".logoText")
        .textContent.split("")
        .map((val) => (val === " " ? "&nbsp;" : `<span>${val}</span>`))
        .join("");

      document.querySelector(".logoText").innerHTML = logo;
      tl.from(".logoText span", {
        opacity: 0,
        delay: .25,
        duration: 0.5,
        stagger: 0.09,
      });
      tl.from(".secondLogo", {
        duration: 0.3,
        opacity: 0,
      });
      gsap.from(".btnContainer", {
        delay: .6,
        y: -50,
        duration: 0.5,
        opacity: 0,
      });

      gsap.from(".lkns", {
        delay: .6,
        y: -50,
        duration: 0.8,
        opacity: 0,
        stagger: 0.1,
      });


    },
    { scope: container }
  );

  const contextValue = { loginModal, setLoginModal , container,loading,setLoading};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
