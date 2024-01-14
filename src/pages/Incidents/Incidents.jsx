import React from "react";
import "./Incidents.scss";
import Header from "../../components/Header/Header";
import grieta from "../../assets/grieta.jpg";
import iconoBaja from "../../assets/iconoBaja.png";
import icono1 from "../../assets/icono1.png";
import icono2 from "../../assets/icono2.png";
import icono3 from "../../assets/icono3.png";
import icono4 from "../../assets/icono4.png";
import atrasIcono from "../../assets/atrasIcono.png";
const Incidents = () => {
  return (
    <>
      <Header />

      <div className="incident-container">
        <img src={atrasIcono} alt="atrasIcono" className="atras-icon" />
        <h1 className="incident-title">Incidencia #1</h1>
        <h3 className="incident-date">19/01/2024</h3>{" "}
        <div className="image-container">
          <img src={grieta} alt="grieta" className="rounded-image" />
        </div>
      </div>
      <div className="floor-container">
        <p className="floor-text">Indica la planta del edificio</p>
        <p>
          <img src={iconoBaja} alt="iconoBaja" className="icon" />
          <img src={icono1} alt="icono1" className="icon" />
          <img src={icono2} alt="icono2" className="icon" />
          <img src={icono3} alt="icono3" className="icon" />
          <img src={icono4} alt="icono4" className="icon" />
        </p>
      </div>
      <div className="next-button">
        <span className="button-title" style={{ color: "white" }}>
          Continuar
        </span>
      </div>
    </>
  );
};

export default Incidents;
