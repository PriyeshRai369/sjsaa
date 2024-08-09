import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
// import PreLoader from "./components/PreLoader/PreLoader";
import Testimonials from "./components/Testimonials/Testimonials";
export default function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
