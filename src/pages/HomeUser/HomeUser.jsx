import React from "react";
import Header from "../../components/Header/Header";
import "./HomeUser.scss";
import iconoIncidencia from "../../assets/iconoIncidencia.png";
import iconoComunidad from "../../assets/iconoComunidad.png";

const HomeUser = () => {
  return (
    <>
      <Header />
      <h1 className="welcome-title">Hola Silvia</h1>
      <span className="title-adress">Gran Vía, 94 C, Valencia</span>
      <div className="buttons-container">
        <div className="incidence-button">
          <div className="icon-container column">
            <span className="home-incident-title">Incidencias</span>
            <div>
              <img
                className="icono-incidence"
                src={iconoIncidencia}
                alt="iconoIncidencia"
              />
              <h2>0</h2>
            </div>
          </div>
        </div>
        <div className="create-incidence-button">
          <div className="icon-container">
            <h5 className="home-create-incident">Crear </h5>
            <span className="home-create-incident-subtitle">incidencia</span>
          </div>
        </div>
        <div className="comunity-button">
          <div className="icon-container">
            <img
              className="icono-comunity"
              src={iconoComunidad}
              alt="iconoComunidad"
            />
            <span className="button-comunity-title-white">Mi Comunidad</span>
          </div>
        </div>

        <div className="junta-button">
          <div className="icon-container">
            <h5 className="junta-title-white">Junta</h5>
            <span className="num-junta-title-white custom-size-junta">21</span>
            <h5 className="enero-title-white">enero</h5>
          </div>
        </div>
        <div className="cuota-button">
          <div className="icon-container">
            <h5 className="cuota-title">Cuota</h5>
            <span className="num-couta-title custom-size-cuota">530</span>
            <h5 className="ano-title">€/año</h5>
          </div>
        </div>
        <div className="reservar-button">
          <div className="icon-container">
            <h5 className="reserve-title">Reservar</h5>
            <h5 className="places-title">instalaciones</h5>
          </div>
        </div>
        <div className="votacion-button">
          <div className="icon-container">
            <div className="icon-container">
              <h5 className="vote-title">Votación</h5>
              <span className="num-vote-title custom-size-votacion">01</span>
              <h5 className="pending-title">pendiente</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeUser;
