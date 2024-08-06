import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
// import Announcements from "./components/Announcements/Announcements";
import Footer from "./components/Footer/Footer";
// import PreLoader from "./components/PreLoader/PreLoader";
export default function App() {
  
  return (
    <>
      {/* <PreLoader/> */}
      {/* <Announcements /> */}
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
