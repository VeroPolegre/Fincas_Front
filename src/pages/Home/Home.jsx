import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import iconoIncidencia from "../../assets/iconoIncidencia.png";
import iconoComunidad from "../../assets/iconoComunidad.png";

const Home = () => {
  return (
    <>
      <Header />
      <h1 className="welcome-title">Hola Silvia</h1>
      <span className="title-adress">Gran Vía, 94 C, Valencia</span>
      <div className="buttons-container">
        <div className="incidence-button">
          <div className="icon-container column">
            <span className="button-title">Incidencias</span>
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
            <span className="button-title-white">
              Crear <br />incidencia
            </span>
            {/* <span className="button-title-white">Incidencia</span> */}
          </div>
        </div>
        <div className="comunity-button">
          <div className="icon-container">
            <img
              className="icono-comunity"
              src={iconoComunidad}
              alt="iconoComunidad"
            />
            <span className="button-title-white">Mi Comunidad</span>
          </div>
        </div>

        <div className="junta-button">
          <div className="icon-container">
            <span className="button-title-white">Junta</span>
            <span className="button-title-white custom-size-junta">21</span>
            <span className="button-title-white">Enero</span>
          </div>
        </div>
        <div className="cuota-button">
          <div className="icon-container">
            <span className="button-title">Cuota</span>
            <span className="button-title custom-size-cuota">530</span>
            <span className="button-title">€/año</span>
          </div>
        </div>
        <div className="reservar-button">
          <div className="icon-container">
            <span className="button-title">Reservar</span>
            <span className="button-title">instalaciones</span>
          </div>
        </div>
        <div className="votacion-button">
          <div className="icon-container">
            <div className="icon-container">
              <span className="button-title">Votación</span>
              <span className="button-title custom-size-votacion">01</span>
              <span className="button-title">pendiente</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
