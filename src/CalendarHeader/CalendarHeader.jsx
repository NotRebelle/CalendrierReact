import React from "react";

export const CalendarHeader = ({
  onNextM,
  onBackM,
  onNextY,
  onBackY,
  dateDisplay1,
  dateDisplay2,
}) => {
  return (
    <div id="header">
      <div>
        <button onClick={onBackM} id="BtnPrecedent">
          {" "}
          ⬅️{" "}
        </button>
        <span id="monthDisplay">{dateDisplay1}</span>
        <button onClick={onNextM} id="BtnSuivant">
          {" "}
          ➡️{" "}
        </button>
      </div>

      <div>
        <button onClick={onBackY} id="BtnPrecedent">
          ⬅️
        </button>
        <span id="yearDisplay">{dateDisplay2}</span>
        <button onClick={onNextY} id="BtnSuivant">
          ➡️
        </button>
      </div>
    </div>
  );
};
