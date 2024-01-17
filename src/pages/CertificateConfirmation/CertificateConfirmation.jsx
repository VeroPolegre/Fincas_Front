import React from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import checkmark from "../../assets/checkmark.png";
import iconoActa from "../../assets/IconoActa.png";
import "./CertificateConfirmation.scss";

const CertificateConfirmation = () => {
  const navigate = useNavigate();
  const handleContinuarClick = () => {
    navigate("/home-admin");
  };
  return (
    <>
      <Header />
      <div className="incident-confirmation-container">
        <h1 className="incident-confirmation-title">¡Enhorabuena!</h1>
        <h3 className="incident-confirmation-subtitle"></h3>
        <div className="image-confirmation-container">
          <h3 className="confirmed-certificate-text">Acta creada</h3>
          <h3 className="confirmed-certificate-text-two">correctamente</h3>
          <img src={checkmark} alt="checkmark" className="checkmark-image" />
        </div>
        <div className="floor-confirmation-container">
          <h2 className="certificate-confirmation-text">Acta #17</h2>
          <h5 className="certificate-subtitle-text">
            C/ de Cuba, 64, Valencia
          </h5>
          <h5 className="certificate-date-text">19/01/2024 </h5>
          <p>
            <img src={iconoActa} alt="iconoActa" className="iconoActa" />
          </p>
        </div>
        <div className="next-button" onClick={handleContinuarClick}>
          <span className="button-title" style={{ color: "white" }}>
            Finalizar
          </span>
        </div>
      </div>
    </>
  );
};

export default CertificateConfirmation;
