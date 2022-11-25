import React, { useEffect, useState } from "react";

export const useDate = (events, nav1, nav2) => {
  const [dateDisplay1, setDateDisplay1] = useState("");
  const [dateDisplay2, setDateDisplay2] = useState("");
  const [days, setDays] = useState([]);

  const eventForDate = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const dt = new Date();

    if (nav1 !== 0) {
      dt.setMonth(new Date().getMonth() + nav1);
    }
    if (nav2 !== 0) {
      dt.setFullYear(new Date().getFullYear() + nav2);
    }
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setDateDisplay1(`${dt.toLocaleDateString("fr-fr", { month: "long" })}`);
    setDateDisplay2(`${dt.toLocaleDateString("fr-fr", { year: "numeric" })}`);
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventForDate(dayString),
          isCurrentDay: i - paddingDays === day && nav1 === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "padding",
          event: null,
          isCurrentDay: false,
          date: "",
        });
      }
    }

    setDays(daysArr);
  }, [events, nav1, nav2]);

  return {
    days,
    dateDisplay1,
    dateDisplay2,
  };
};
