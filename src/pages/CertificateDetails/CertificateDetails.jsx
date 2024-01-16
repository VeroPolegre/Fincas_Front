import React from "react";
import Header from "../../components/Header/Header";
import atrasIcono from "../../assets/atrasIcono.png";
import "./CertificateDetails.scss";
import { useNavigate } from "react-router-dom";

// import { Button, Modal } from "antd";

const CertificateDetails = () => {
  const navigate = useNavigate();
  const handleAtrasIconoClick = () => {
    navigate("/create-certificate");
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
      <div className="certificate-details-buttons-container">
        <button className="certificate-camera-button">
          <div className="icon-container">
            <span className="button-title">Cámara</span>
          </div>
        </button>
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
