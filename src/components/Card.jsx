import React from "react";

const Card = ({ job }) => {
  const { position, company, location, type, date, status } = job;

  const getClassName = () => {
    switch (status) {
      case "Devam Ediyor":
        return "pending";
      case "Reddedildi":
        return "rejected";
      case "Mülakat":
        return "interview";

      default:
        return "default";
    }
  };

  return (
    <div className="card">
      {/* Üst Kısım */}

      <div className="head">
        <div className="letter">
          <p>{company[0]}</p>
        </div>

        <div className="info">
          <p>{position}</p>
          <p>{company}</p>
        </div>
      </div>

      {/* Alt Kısım */}

      <div className="body">
        <div className="field">
          <img src="/images/map.png" alt="" />
          <p>{location}</p>
        </div>
        <div className="field">
          <img src="/images/bag.png" alt="" />
          <p>{type}</p>
        </div>
        <div className="field">
          <img src="/images/calendar.png" alt="" />
          <p>{date}</p>
        </div>

        <div className="status">
          <span className={getClassName()}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
