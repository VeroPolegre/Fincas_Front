import React from "react";
import Header from "../../components/Header/Header";
import "./HomeAdmin.scss";
import iconoCalendario from "../../assets/iconoCalendario.png";
import iconoRecibo from "../../assets/iconoRecibo.png";
import iconoArea from "../../assets/iconoArea.png";
import { useNavigate } from "react-router-dom";
const HomeAdmin = () => {
  const navigate = useNavigate();
  const handleCreateIncidentClick = () => {
    navigate("/search-comunity");
  };
  return (
    <>
      <Header />
      <h1 className="welcome-title-admin">Hola Juan</h1>
      <span className="title-adress-admin"></span>
      <div className="buttons-container-admin">
        <div className="incidence-button-admin">
          <div className="icon-container-admin column">
            <span className="home-incident-title-admin">Comunidades</span>
            <div>
              <h2
                style={{ fontSize: "50px", marginTop: "65px", fontWeight: 500 }}
              >
                41
              </h2>
            </div>
          </div>
        </div>
        <div
          className="create-incidence-button-admin"
          onClick={handleCreateIncidentClick}
        >
          <div className="icon-container-admin">
            <h5 className="home-create-incident-admin">Crear acta</h5>
            {/* <span className="home-create-incident-subtitle-admin">acta</span> */}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="comunity-button-admin">
            <div className="icon-container-admin">
              <span className="button-comunity-white-admin">Cuba, 64</span>
              <span className="button-comunity-title-white-admin">13:00</span>
            </div>
          </div>
          <div className="junta-button-admin">
            <div className="icon-container-admin">
              <span className="button-comunity-black-admin">Alboraya, 27</span>
              <span className="button-comunity-title-black-admin">13:00</span>
            </div>
          </div>
          <div className="calendario-admin">
            <div className="icon-container-admin">
              <span className="button-calendario-black-admin">Calendario</span>
              <img
                className="icono-calendario"
                src={iconoCalendario}
                alt="iconoCalendario"
              />
            </div>
          </div>
        </div>
        <div className="cuota-button-admin">
          <div className="icon-container-admin">
            <img className="icono-recibo" src={iconoRecibo} alt="iconoRecibo" />
            <span className="pendiente-title-admin">Recibos pendientes</span>
          </div>
        </div>
        <div className="area-button-admin">
          <div className="icon-container-admin">
            <span className="area-title-admin">Área privada</span>
            <img className="icono-area" src={iconoArea} alt="iconoArea" />
          </div>
        </div>
        <div className="incidencias-button-admin">
          <div className="icon-container-admin" style={{ color: "white" }}>
            <span className="incidencias-title-admin">Incidencias</span>
            <h2
              style={{
                fontSize: "50px",
                marginTop: "80px",
                marginLeft: "-80px",
                marginRight: "50px",
                fontWeight: 500,
                color: "white",
              }}
            >
              7
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
