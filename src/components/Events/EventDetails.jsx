export default function EventDetails({
  month,
  date,
  title,
  fullDate,
  location,
}) {
  return (
    <div className="row mb-5">
      <div className="col-lg-12">
        <div className="eventContainer">
          <div className="row">
            <div className="col-lg-2" style={{ borderRight: "1px solid" }}>
              <p>{month}</p>
              <h2>{date}</h2>
            </div>
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading">
                    <a href="/">
                      <h1> {title} <i className="fa-solid fa-arrow-right "></i> </h1>
                      
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 my-2">
                  <div className="eventDate">
                    <p>
                      <i className="fa-solid fa-calendar-days"></i>
                      {fullDate}
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="location">
                    <p>
                      <i className="fa-solid fa-location-dot"></i>
                      {location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
