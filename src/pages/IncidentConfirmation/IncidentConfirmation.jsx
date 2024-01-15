import React from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const IncidentConfirmation = () => {
  const navigate = useNavigate();
  const handleContinuarClick = () => {
    navigate("/incident-tracking");
  };
  return (
    <>
      <Header />
      <h1>Gracias por tu aviso</h1>
      <h3>Pronto estará arreglado</h3>
      <div>
        <p>Se ha registrado tu incidencia</p>
      </div>
      <div>
        <h5>Incidencia #1</h5>
        <p>Rotura de bombilla</p>
        <p>19/01/2024 - Ref: 6455749846</p>
      </div>
      <div className="next-button" onClick={handleContinuarClick}>
        <span className="button-title" style={{ color: "white" }}>
          Continuar
        </span>
      </div>
    </>
  );
};

export default IncidentConfirmation;
