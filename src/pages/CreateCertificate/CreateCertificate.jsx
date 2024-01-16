import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
// import { uploadImage } from "../../features/certificates/certificatesSlice";
import "./CreateCertificate.scss";
import { setImage, clearImage } from "../../features/incidents/incidentsSlice";
import iconoCamara from "../../assets/iconoCamara.png";
import atrasIconoActa from "../../assets/atrasIconoActa.png";
import iconoGallery from "../../assets/iconoGallery.png";
import iconoArchivo from "../../assets/iconoArchivo.png";
import iconoAudio from "../../assets/iconoAudio.png";
import { useNavigate } from "react-router-dom";
import incidentsService from "../../features/incidents/incidentsService";
// import { Button, Modal } from "antd";

export default function CreateCertificate() {
  // const dispatch = useDispatch();
  // const [file, setFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // const handleUploadImage = () => {
  //   dispatch(uploadImage(file));
  // };

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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const selectedImage = useSelector((state) => state.incidents.selectedImage);
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonType) => {
    if (selectedButtons.includes(buttonType)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonType));
    } else {
      setSelectedButtons([...selectedButtons, buttonType]);
    }
  };

  const handleGalleryButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    try {
      const imageUrl = await incidentsService.uploadImage(selectedFile);
      dispatch(setImage(imageUrl));
    } catch (error) {
      console.error("Error handling file change:", error);
    }
  };

  const handleSubmit = () => {
    navigate("");
    if (selectedImage) {
      console.log("Submitting image:", selectedImage);
      dispatch(clearImage());
    } else {
      console.log("No image selected");
    }
  };

  const handleAtrasIconoClick = () => {
    navigate("/home-admin");
  };
  return (
    <>
      <Header />
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
      {/* <form>
        <label>
          Adjuntar archivo:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="button" onClick={handleUploadImage}>
          Resumir acta
        </button>
      </form> */}
      <h1 className="certificate-title">Crear acta</h1>
      <div className="certificate-address">
        <img
          src={atrasIconoActa}
          alt="atrasIcono"
          className="atras-icon-acta"
          onClick={handleAtrasIconoClick}
        />
        <span>C. de Cuba, 64, Valencia</span>
      </div>
      <div className="create-certificate-buttons-container">
        <button
          className={`certificate-camera-button ${
            selectedButtons.includes("camera") ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("camera")}
          style={{
            background: selectedButtons.includes("camera")
              ? "#627B90"
              : "var(--Colors-Neutros-White-Normal, #fcfcfc)",
            border: selectedButtons.includes("camera")
              ? "none"
              : "1px solid transparent",
          }}
        >
          <div className="icon-container">
            <img className="icono-camara" src={iconoCamara} alt="iconoCamara" />
            <span className="button-title">Cámara</span>
          </div>
        </button>
        <button
          className={`certificate-gallery-button ${
            selectedButtons.includes("gallery") ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("gallery")}
          style={{
            background: selectedButtons.includes("gallery")
              ? "#627B90"
              : "#fafafa",
            border: selectedButtons.includes("gallery")
              ? "none"
              : "1px solid transparent",
          }}
        >
          <div className="icon-container">
            <img
              className="icono-gallery"
              src={iconoGallery}
              alt="iconoGalería"
            />
            <span className="button-title">Galería</span>
          </div>
        </button>

        <button
          className={`certificate-audio-button ${
            selectedButtons.includes("audio") ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("audio")}
          style={{
            background: selectedButtons.includes("audio")
              ? "#627B90"
              : "#fafafa",
            border: selectedButtons.includes("audio")
              ? "none"
              : "1px solid transparent",
          }}
        >
          <div className="icon-container">
            <img className="icono-audio" src={iconoAudio} alt="iconoAudio" />
            <span className="button-title">Audio</span>
          </div>
        </button>
        <button
          className={`certificate-file-button ${
            selectedButtons.includes("call") ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("call")}
          style={{
            background: selectedButtons.includes("call")
              ? "#627B90"
              : "#fafafa",
            border: selectedButtons.includes("call")
              ? "none"
              : "1px solid transparent",
          }}
        >
          <div className="icon-container">
            <img className="icono-call" src={iconoArchivo} alt="iconoArchivo" />
            <span className="button-title">Archivo</span>
          </div>
        </button>
        <button
          className={`certificate-next-button ${
            selectedButtons.length > 0 ? "selected" : ""
          }`}
          onClick={handleSubmit}
          style={{
            background:
              selectedButtons.length > 0
                ? "#627B90"
                : "var(--Colors-Secondary-Light-Blue-Normal, #627B90)",
            border:
              selectedButtons.length > 0 ? "none" : "1px solid transparent",
          }}
        >
          <span className="button-title" style={{ color: "white" }}>
            Continuar
          </span>
        </button>
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </>
  );
}
