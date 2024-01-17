import React, { useState } from "react";
import Header from "../../components/Header/Header";
import iconoWalletDetail from "../../assets/walletSearchComunity.png";
import iconoSoloLupa from "../../assets/iconoSoloLupa.png";
import iconoSoloMicro from "../../assets/iconoSoloMicro.png";
import iconoPropietarios from "../../assets/iconoPropietarios.png"
import iconoFlecha from "../../assets/iconoFlecha.png"
import { useNavigate } from "react-router-dom";
import "./SearchComunityDetail.scss";

const SearchComunityDetail = () => {
  const navigate = useNavigate();

  const handleSelectFinalAdressClick = () => {
    navigate("/create-certificate");
  };

  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />

      <div className="create-certificate-search-detail-container">
        <h1 className="search-detail-confirmation-title">Crear acta</h1>
        <h3 className="search-detail-confirmation-subtitle">Indica la comunidad</h3>

        <form className="form-register">
          <div className="custom-label-input">
            <div className="input-with-icon">
              <img
                src={iconoSoloLupa}
                alt="iconoSoloLupa"
                className="iconoSoloLupa"
              />
              <img
                src={iconoSoloMicro}
                alt="iconoSoloMicro"
                className="iconoSoloMicro"
              />
              <input
                className="input-search-comunity"
                type="text"
                name="text"
                placeholder="Buscar comunidad"
                value={formData.text}
                onChange={onChange}
              />
            </div>
          </div>
        </form>
        <div className="image-detail-confirmation-container">
          <img
            src={iconoPropietarios}
            alt="iconoPropietarios"
            className="iconoPropietarios"
          />
          <div onClick={handleSelectFinalAdressClick}>
            <img
              src={iconoFlecha}
              alt="iconoFlecha"
              className="iconoFlecha"
            />
          </div>
          <h2 className="search-detail-confirmation-text">Carrer de Cuba, 64</h2>
          <h2 className="search-detail-confirmation-text-doce">12</h2>
          <h5 className="search-detail-subtitle-text">Presidente: Pablo Fernández</h5>
          <h5 className="search-detail-last-certificate-text">Última acta: 29/12/2023</h5>
          <h5 className="search-detail-first-certificate">Primera acta: 28/12/2003</h5>
          <h5 className="search-detail-num-incidents-text">Incidencias: 2</h5>
        </div>
        <div>
          <img
            src={iconoWalletDetail}
            alt="iconoWalletDetail"
            className="iconoWalletDetail"
          />
        </div>
      </div>
    </>
  );
};

export default SearchComunityDetail;
