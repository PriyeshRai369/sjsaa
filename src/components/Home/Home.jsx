import Carousel from "../Carousel/Carousel";
import MessageForAlumni from "../MessageForAlumni/MessageForAlumni";
import OurNotableAlumni from "../Our-Notable-Alumni/OurNotableAlumni";
import Vision from "../Vision/Vision";
import Stories from "../Stories/Stories";
import AboutUs from "../AboutUs/AboutUs";
import Events from "../Events/Events";
import ManagingCommittee from "../ManagingCommittee/ManagingCommittee";
import News from "../News/News";
import Achievers from "../Achievers/Achievers";

export default function Home() {
  return (
    <>
      <Carousel />
      <AboutUs/>
      <ManagingCommittee/>
      <Events/>
      {/* <OurNotableAlumni /> */}
      <Stories/>
      <Vision/>
      <MessageForAlumni/>
      {/* <News/> */}
      <Achievers/>
    </>
  );
}
