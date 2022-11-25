import React, { useState, useEffect } from "react";
import { CalendarHeader } from "../CalendarHeader";
import { Day } from "../Day";
import { NewEventModal } from "../NewEventModal";
import { DeleteEventModal } from "../DeleteEventModal";
import { useDate } from "../hooks/useDate";

export const App = () => {
  const [nav1, setNav1] = useState(0);
  const [nav2, setNav2] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const eventForDate = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay1, dateDisplay2 } = useDate(events, nav1, nav2);

  return (
    <>
      <div id="container">
        <CalendarHeader
          dateDisplay1={dateDisplay1}
          dateDisplay2={dateDisplay2}
          onNextM={() => setNav1(nav1 + 1)}
          onBackM={() => setNav1(nav1 - 1)}
          onNextY={() => setNav2(nav2 + 1)}
          onBackY={() => setNav2(nav2 - 1)}
        />

        <div id="semaine">
          <div>Lundi</div>
          <div>Mardi</div>
          <div>Mercredi</div>
          <div>Jeudi</div>
          <div>Vendredi</div>
          <div>Samedi</div>
          <div>Dimanche</div>
        </div>

        <div id="calendrier">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== "padding") {
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {clicked && !eventForDate(clicked) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      )}

      {clicked && eventForDate(clicked) && (
        <DeleteEventModal
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter((e) => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
};
