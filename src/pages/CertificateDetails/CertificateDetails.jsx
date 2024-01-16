import React from "react";
// import { Button, Modal } from "antd";

const CertificateDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      CertificateDetails
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
