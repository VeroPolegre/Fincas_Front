import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "./CreateCertificate.scss";
import iconoCamara from "../../assets/iconoCamara.png";
import atrasIconoActa from "../../assets/atrasIconoActa.png";
import iconoGallery from "../../assets/iconoGallery.png";
import iconoArchivo from "../../assets/iconoArchivo.png";
import iconoAudio from "../../assets/iconoAudio.png";
import { useNavigate } from "react-router-dom";
import certificatesService from "../../features/certificates/certificatesService";

export default function CreateCertificate() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  const handleUploadFile = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const res = await certificatesService.uploadFile(formData);
        console.log("File uploaded successfully:", res);
        navigate("/certificate-details");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.error("No file selected");
    }
  };

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonType) => {
    if (selectedButtons.includes(buttonType)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonType));
    } else {
      setSelectedButtons([...selectedButtons, buttonType]);
    }
  };

  const handleAtrasIconoClick = () => {
    navigate("/home-admin");
  };
  return (
    <>
      <Header />
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
          onClick={handleFileClick}
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
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button
          className={`certificate-next-button ${
            selectedButtons.length > 0 ? "selected" : ""
          }`}
          onClick={handleUploadFile}
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
    </>
  );
}
