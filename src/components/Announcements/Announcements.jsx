import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function Announcements() {
  return (
    <div className="announcement">
      <div className="content">
        <p>Announcement</p>
      </div>

      <div className="marq">
        <Marquee pauseOnHover="true" speed={100} gradient="true" gradientColor="#fab341" gradientWidth={100}>
          <Link to={"/"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            harum?
          </Link>
        </Marquee>
      </div>
    </div>
  );
}
