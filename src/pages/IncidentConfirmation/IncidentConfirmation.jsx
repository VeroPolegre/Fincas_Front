import React from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import checkmark from "../../assets/checkmark.png";
import iconoBombilla from "../../assets/IconoBombilla.png";
import "./IncidentConfirmation.scss";

const IncidentConfirmation = () => {
  const navigate = useNavigate();
  const handleContinuarClick = () => {
    navigate("/incident-tracking");
  };
  return (
    <>
      <Header />
      <div className="incident-confirmation-container">
        <h1 className="incident-confirmation-title">Gracias por tu aviso</h1>
        <h3 className="incident-confirmation-subtitle">
          Pronto estará arreglado
        </h3>
        <div className="image-confirmation-container">
          <h3 className="confirmed-incident-text">
            Se ha registrado
          </h3>
          <h3 className="confirmed-incident-text-two">
          tu incidencia
          </h3>
          <img src={checkmark} alt="checkmark" className="checkmark-image" />
        </div>
        <div className="floor-confirmation-container">
          <h2 className="incidence-confirmation-text">Incidencia #1</h2>
          <h5 className="incidence-subtitle-text">Rotura de bombilla</h5>
          <h5 className="incidence-date-text">19/01/2024 - Ref: 6455749846 </h5>
          <p>
            <img
              src={iconoBombilla}
              alt="iconoBombilla"
              className="iconoBombilla"
            />
          </p>
        </div>
        <div className="next-button" onClick={handleContinuarClick}>
          <span className="button-title" style={{ color: "white" }}>
            Ver seguimiento
          </span>
        </div>
      </div>
    </>
  );
};

export default IncidentConfirmation;
