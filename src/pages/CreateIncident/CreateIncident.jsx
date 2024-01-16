import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./CreateIncident.scss";
import { setImage, clearImage } from "../../features/incidents/incidentsSlice";

import iconoCamara from "../../assets/iconoCamara.png";
import iconoGallery from "../../assets/iconoGallery.png";
import iconoText from "../../assets/iconoText.png";
import iconoAudio from "../../assets/iconoAudio.png";
import iconoCall from "../../assets/iconoCall.png";
import { useNavigate } from "react-router-dom";
import incidentsService from "../../features/incidents/incidentsService";
import iconoInfo from "../../assets/iconoInfo.png"

const CreateIncident = () => {
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
    navigate("/incidents");
    if (selectedImage) {
      console.log("Submitting image:", selectedImage);
      dispatch(clearImage());
    } else {
      console.log("No image selected");
    }
  };

  return (
    <>
      <Header />
      <h1 className="incident-title">
        Crear <br /> incidencia
      </h1>
      <div className="create-incident-buttons-container">
        <button
          className={`camera-button ${
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
          className={`gallery-button ${
            selectedButtons.includes("gallery") ? "selected" : ""
          }`}
          onClick={handleGalleryButtonClick}
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
          className={`text-button ${
            selectedButtons.includes("text") ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("text")}
          style={{
            background: selectedButtons.includes("text")
              ? "#627B90"
              : "#fafafa",
            border: selectedButtons.includes("text")
              ? "none"
              : "1px solid transparent",
          }}
        >
          <div className="icon-container">
            <img className="icono-text" src={iconoText} alt="iconoTexto" />
            <span className="button-title">Texto</span>
          </div>
        </button>
        <button
          className={`audio-button ${
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
          className={`call-button ${
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
            <img className="icono-call" src={iconoCall} alt="iconoCall" />
            <span className="button-title">Llamada</span>
          </div>
        </button>
        <button
          className={`next-button ${
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
};

export default CreateIncident;
