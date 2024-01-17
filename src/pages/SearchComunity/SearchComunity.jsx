import React, { useState } from "react";
import Header from "../../components/Header/Header";
import iconoWallet from "../../assets/walletSearchComunity.png";
import iconoSoloLupa from "../../assets/iconoSoloLupa.png";
import iconoSoloMicro from "../../assets/iconoSoloMicro.png";
import { useNavigate } from "react-router-dom";
import "./SearchComunity.scss";

const SearchComunity = () => {
  const navigate = useNavigate();

  const handleSelectAdressClick = () => {
    navigate("/search-comunity-detail");
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

      <div className="create-certificate-search-container">
        <h1 className="search-confirmation-title">Crear acta</h1>
        <h3 className="search-confirmation-subtitle">Indica la comunidad</h3>

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

        <div onClick={handleSelectAdressClick}>
          <img src={iconoWallet} alt="iconoWallet" className="iconoWallet" />
        </div>
      </div>
    </>
  );
};

export default SearchComunity;
