import React from "react";
import Header from "../../components/Header/Header";
import iconoBombilla from "../../assets/IconoBombilla.png";
import trackingBar from "../../assets/trackingBar.png";
import iconoBerto from "../../assets/iconoBerto.png";
import "./IncidentTracking.scss";

const IncidentTracking = () => {
  return (
    <>
      <Header />
      <h1>Seguimiento</h1>
      <div className="tracking-container">
        <div className="image-tracking-container">
          <img
            src={iconoBombilla}
            alt="iconoBombilla"
            className="iconoBombillaTracking"
          />
          <img
            src={trackingBar}
            alt="trackingBar"
            className="iconoTrackingBar"
          />
        </div>
        <div className="text-tracking-container">
          <h4 className="text-tracking-incident">Incidencia #1</h4>
          <h5 className="date-tracking-incident">19/01/2024 Ref: 6455749846</h5>
          <h4 className="register-tracking-incident">Registro</h4>
          <h5 className="registed-succes-incident">Registrada con éxito.</h5>
          <h5 className="date-registed-succes-incident">Día 19/01/2024</h5>
          <h4 className="prov-tracking">Proveedor</h4>
          <h5 className="prov-tracking-subtitle">El técnico ha sido avisado</h5>
          <h5 className="date-prov-tracking">Día 19/01/2024</h5>
          <h4 className="day-confirmed-tracking">Cita confirmada</h4>
          <h5 className="day-prevision-tracking">Día previsto 21/01/2024</h5>
          <h4 className="repair-title-tracking">Reparada</h4>
          <h5 className="day-repair-tracking">Día previsto 21/01/2024</h5>
        </div>
      </div>
      <div className="floor-tracking-container">
        <img src={iconoBerto} alt="iconoBerto" className="iconoBerto" />
      </div>
      <div className="text-provider-container">
        <h3 className="official-provider-tracking">Proveedor oficial</h3>
        <h4 className="name-provider-tracking">Berto Romero Tomás</h4>
        <h4 className="tfn-provider-tracking">650 344 109</h4>
        <h4 className="email-provider-tracking">b.romeroto@gmail.com</h4>
      </div>
    </>
  );
};

export default IncidentTracking;
