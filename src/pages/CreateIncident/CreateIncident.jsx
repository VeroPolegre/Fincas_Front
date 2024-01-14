import React from "react";
import Header from "../../components/Header/Header";
import "./CreateIncident.scss";
import iconoCamara from "../../assets/iconoCamara.png";
import iconoGallery from "../../assets/iconoGallery.png";
import iconoText from "../../assets/iconoText.png";
import iconoAudio from "../../assets/iconoAudio.png";
import iconoCall from "../../assets/iconoCall.png";

const CreateIncident = () => {
  return (
    <>
      <Header />
      <h1 className="incident-title">
        Crear <br /> incidencia
      </h1>
      <div className="buttons-container">
        <div className="camera-button ">
          <div className="icon-container">
            <img className="icono-camara" src={iconoCamara} alt="iconoCamara" />
            <span className="button-title">Cámara</span>
          </div>
        </div>
        <div className="gallery-button">
          <div className="icon-container">
            <img
              className="icono-gallery"
              src={iconoGallery}
              alt="iconoGalería"
            />
            <span className="button-title">Galería</span>
          </div>
        </div>
        <div className="text-button">
          <div className="icon-container">
            <img className="icono-text" src={iconoText} alt="iconoTexto" />
            <span className="button-title">Texto</span>
          </div>
        </div>
        <div className="audio-button">
          <div className="icon-container">
            <div className="icon-container">
              <img className="icono-audio" src={iconoAudio} alt="iconoAudio" />
              <span className="button-title">Audio</span>
            </div>
          </div>
        </div>
        <div className="call-button">
          <div className="icon-container">
            <img className="icono-call" src={iconoCall} alt="iconoCall" />
            <span className="button-title">Llamada</span>
          </div>
        </div>
        <div className="cancel-button">
          <span className="button-title">Cancelar</span>
        </div>
      </div>
    </>
  );
};

export default CreateIncident;
