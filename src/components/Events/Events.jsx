import EventDetails from "./EventDetails";

export default function Events() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Upcoming Events</h1>
        </div>
        <EventDetails
          month="Dec"
          date={19}
          title="Meet & Greet"
          fullDate="MONDAY, 19 DEC 2024 | 10:00 AM to 08:00 PM"
          location="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, aliquid."
        />
        <EventDetails
          month="Dec"
          date={20}
          title="Memories Events & Grand Party for '99' Batch"
          fullDate="Tuesday, 20 DEC 2024 | 10:00 AM to 08:00 PM"
          location="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, aliquid."
        />
        <EventDetails
          month="Dec"
          date={21}
          title="School Functions All Day Long Followed By Gala Dinner At Night."
          fullDate="Wednesday, 21 DEC 2024 | 10:00 AM to 08:00 PM"
          location="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, aliquid."
        />

        <button className="viewMoreBtn">View More Events</button>
      </div>
    </section>
  );
}
