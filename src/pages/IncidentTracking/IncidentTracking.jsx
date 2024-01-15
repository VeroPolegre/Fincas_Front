import React from "react";
import Header from "../../components/Header/Header";

const IncidentTracking = () => {
  return (
    <>
      <Header />
      <h1>Seguimiento</h1>
      <div>
        <div></div>
        <div>
          <h4>Registro</h4>
          <h5>Registrada con éxito.</h5>
          <h5>Día 19/01/2024</h5>
          <h4>Proveedor</h4>
          <h5>El técnico ha sido avisado</h5>
          <h5>Día 19/01/2024</h5>
          <h4>Cita confirmada</h4>
          <h5>Día 21/01/2024</h5>
          <h4>Reparada</h4>
          <h5>Día 21/01/2024</h5>
        </div>
        <div>
          <h3>Proveedor oficial</h3>
          <h4>Berto Romero Tomás</h4>
          <p>650 344 109</p>
          <p>b.romeroto@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default IncidentTracking;
