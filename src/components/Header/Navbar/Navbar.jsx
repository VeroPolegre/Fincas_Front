import React from "react";
import iconoCasa from "../../../assets/iconoCasa.png";
import iconoLupa from "../../../assets/iconoLupa.png";
import iconoCampana from "../../..//assets/iconoCampana.png";
import iconoUsuario from "../../../assets/iconoUsuario.png";
const Navbar = () => {
  return (
    <>
      <img className="iconoCasa" src={iconoCasa} alt="iconoCasa" />
      <div className="icons-container">
        <img className="iconoLupa" src={iconoLupa} alt="iconoLupa" />
        <img className="iconoCampana" src={iconoCampana} alt="iconoCampana" />
        <img className="iconoUsuario" src={iconoUsuario} alt="iconoUsuario" />
      </div>
    </>
  );
};

export default Navbar;
