import React from "react";
import Header from "../../components/Header/Header";
import "./HomeAdmin.scss";
import iconoIncidencia from "../../assets/iconoIncidencia.png";
import iconoComunidad from "../../assets/iconoComunidad.png";

const HomeAdmin = () => {
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
        <div className="create-incidence-button-admin">
          <div className="icon-container-admin">
            <h5 className="home-create-incident-admin">Crear acta</h5>
            {/* <span className="home-create-incident-subtitle-admin">acta</span> */}
          </div>
        </div>
        <div className="comunity-button-admin">
          <div className="icon-container-admin">
            <img
              className="icono-comunity-admin"
              src={iconoComunidad}
              alt="iconoComunidad"
            />
            <span className="button-comunity-title-white-admin">
              Mi Comunidad
            </span>
          </div>
        </div>

        <div className="junta-button-admin">
          <div className="icon-container-admin">
            <span className="junta-title-white-admin">Junta</span>
            <span className="button-title-white-admin custom-size-junta-admin">
              21
            </span>
            <span className="enero-title-white-admin">Enero</span>
          </div>
        </div>
        <div className="cuota-button-admin">
          <div className="icon-container-admin">
            <span className="button-title-admin">Cuota</span>
            <span className="button-title-admin custom-size-cuota-admin">
              530
            </span>
            <span className="button-title-admin">€/año</span>
          </div>
        </div>
        <div className="reservar-button-admin">
          <div className="icon-container-admin">
            <span className="button-title-admin">Reservar</span>
            <span className="button-title-admin">instalaciones</span>
          </div>
        </div>
        <div className="votacion-button-admin">
          <div className="icon-container-admin">
            <div className="icon-container-admin">
              <span className="button-title-admin">Votación</span>
              <span className="button-title-admin custom-size-votacion-admin">
                01
              </span>
              <span className="button-title-admin">pendiente</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
