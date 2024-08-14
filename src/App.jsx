import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import PreLoader from "./components/PreLoader/PreLoader";
export default function App() {
  
  return (
    <>
      {/* <PreLoader/> */}
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
