import React from "react";

export const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return (
    <>
      <div id="deleteEventModal">
        <h2>Event</h2>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} id="BtnSuppr">
          Supprimer
        </button>
        <button onClick={onClose} id="BtnFermer">
          Fermer
        </button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
