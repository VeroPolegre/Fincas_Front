import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getResume,
  getAudio,
} from "../../features/certificates/certificatesSlice";
import Header from "../../components/Header/Header";
import atrasIcono from "../../assets/atrasIcono.png";
import iconoArchivo from "../../assets/iconoArchivo.png";
import iconoAltavoz from "../../assets/iconoAltavoz.png";
import iconoEdit from "../../assets/iconoEdit.png";
import "./CertificateDetails.scss";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import resumeAudioFile from "../../assets/Acta_comunidad.mp3";
// import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

const CertificateDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resumeText, resumeAudio } = useSelector(
    (state) => state.certificates
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAtrasIconoClick = () => {
    navigate("/create-certificate");
  };
  const handleContinuarClick = () => {
    navigate("/certificate-confirmation");
  };

  useEffect(() => {
    dispatch(getResume());
    dispatch(getAudio());
  }, [dispatch]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const audioRef = useRef(null);
  const handleListenResumeClick = () => {
    audioRef.current.play();
  };
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
          <h5 className="listen-certificate-title">
            Escuchar <br />
            acta
          </h5>
          <img src={iconoAltavoz} alt="iconoAltavoz" className="iconoAltavoz" />
        </div>
      </div>
      <div className="resume-button" onClick={showModal}>
        <div className="icon-container">
          <h5 className="resume-title">Ver acta resumida</h5>
          <img src={iconoArchivo} alt="iconoArchivo" className="iconoArchivo" />
        </div>
      </div>
      <div className="listen-resume-button" onClick={handleListenResumeClick}>
        {/* <AudioPlayer audioData={resumeAudio?.audio} /> */}
        <div className="icon-container">
          <h5 className="listen-resume-title">
            Escuchar <br />
            resumen
          </h5>
          <audio ref={audioRef} src={resumeAudioFile} />
          <img src={iconoAltavoz} alt="iconoAltavoz" className="iconoAltavoz" />
        </div>
      </div>
      <div className="next-button" onClick={handleContinuarClick}>
        <span className="button-title" style={{ color: "white" }}>
          Crear acta
        </span>
      </div>
      <Modal
        title="Resumen de acta"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "#627b90" } }}
        style={{ top: "200px" }}
      >
        <p style={{ textAlign: "justify", marginBottom: "20px" }}>
          {resumeText?.resumen}
        </p>
      </Modal>
    </div>
  );
};

export default CertificateDetails;
