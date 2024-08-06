// import Announcements from "../Announcements/Announcements";
import Carousel from "../Carousel/Carousel";
import Events from "../Events/Events";
import MessageForAlumni from "../MessageForAlumni/MessageForAlumni";
// import OurNotableAlumni from "../Our-Notable-Alumni/OurNotableAlumni";
import Vision from "../Vision/Vision";
import Stories from "../Stories/Stories";
import News from "../News/News";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Carousel />
      {/* <OurNotableAlumni /> */}
      <Events/>
      <Vision/>
      <MessageForAlumni/>
      {/* <Announcements/> */}
      <Stories/>
      <News/>
      <Testimonials/>
    </>
  );
}
