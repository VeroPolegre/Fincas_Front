import React from "react";
import Header from "../../components/Header/Header";
import atrasIcono from "../../assets/atrasIcono.png";
import iconoArchivo from "../../assets/iconoArchivo.png";
import iconoAltavoz from "../../assets/iconoAltavoz.png";
import iconoEdit from "../../assets/iconoEdit.png";
import "./CertificateDetails.scss";
import { useNavigate } from "react-router-dom";

// import { Button, Modal } from "antd";

const CertificateDetails = () => {
  const navigate = useNavigate();
  const handleAtrasIconoClick = () => {
    navigate("/create-certificate");
  };

  const handleContinuarClick = () => {
    navigate("/incident-tracking");
  };
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div>
      <Header />
      <div className="certificatedetails-container">
        <img
          src={atrasIcono}
          alt="atrasIcono"
          className="atras-icon"
          onClick={handleAtrasIconoClick}
        />
        <h1 className="certificatedetails-title">Acta #17</h1>
        <span className="certificatedetails-date">
          C. de Cuba, 64, Valencia
        </span>
      </div>
      <div className="certificate-details-file-container">
        <img src={iconoEdit} alt="iconoEdit" className="iconoEdit" />
      </div>
      <div className="complete-certificate-button">
        <div className="icon-container">
          <h5 className="complete-certificate-title">Ver acta completa</h5>
          <img src={iconoArchivo} alt="iconoArchivo" className="iconoArchivo" />
        </div>
      </div>
      <div className="listen-certificate-button">
        <div className="icon-container">
          <h5 className="listen-certificate-title">Escuchar acta</h5>
          <img src={iconoAltavoz} alt="iconoAltavoz" className="iconoAltavoz" />
        </div>
      </div>
      <div className="resume-button">
        <div className="icon-container">
          <h5 className="resume-title">Ver acta resumida</h5>
          <img src={iconoArchivo} alt="iconoArchivo" className="iconoArchivo" />
        </div>
      </div>
      <div className="listen-resume-button">
        <div className="icon-container">
          <h5 className="listen-resume-title">Escuchar resumen</h5>
          <img src={iconoAltavoz} alt="iconoAltavoz" className="iconoAltavoz" />
        </div>
      </div>
      <div className="next-button" onClick={handleContinuarClick}>
        <span className="button-title" style={{ color: "white" }}>
          Crear acta
        </span>
      </div>

      {/* 
      <Button type="secundary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Resumen de acta"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#627b90" } }}
      >
        <p>
          Aprobación de las cuentas del ejercicio anterior y del presupuesto
          para el presente año. Propuesta de instalación of un ascensor in el
          edificio. Ruegos y preguntas. Se abre la sesión a las 19:15 horas.
        </p>
      </Modal> */}
    </div>
  );
};

export default CertificateDetails;
