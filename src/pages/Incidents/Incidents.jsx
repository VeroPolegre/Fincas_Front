import React from "react";
import "./Incidents.scss";
import Header from "../../components/Header/Header";
import grieta from "../../assets/grieta.jpg";

const Incidents = () => {
  return (
    <>
      <Header />

      <div className="incident-container">
        <h1 className="incident-title">Incidencia #1</h1>
        <h3 className="incident-date">19/01/2024</h3>{" "}
        <div className="image-container">
          <img src={grieta} alt="grieta" className="rounded-image" />
        </div>
      </div>
      <div className="floor-container">
        <span>Indica la planta del edificio</span>
      </div>
    </>
  );
};

export default Incidents;
