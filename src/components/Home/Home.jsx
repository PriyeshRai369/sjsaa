import Carousel from "../Carousel/Carousel";

import MessageForAlumni from "../MessageForAlumni/MessageForAlumni";
import OurNotableAlumni from "../Our-Notable-Alumni/OurNotableAlumni";
import Vision from "../Vision/Vision";
import Stories from "../Stories/Stories";

import AboutUs from "../AboutUs/AboutUs";

export default function Home() {
  return (
    <>
      <Carousel />
      <AboutUs/>
      <OurNotableAlumni />
      <Stories/>
      <Vision/>
      <MessageForAlumni/>
      
    </>
  );
}
