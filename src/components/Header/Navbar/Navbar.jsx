import React from "react";
import iconoCasa from "../../../assets/iconoCasa.png";
import iconoLupa from "../../../assets/iconoLupa.png";
import iconoCampana from "../../../assets/iconoCampana.png";
import iconoUsuario from "../../../assets/iconoUsuario.png";
import iconoAdmin from "../../../assets/iconoAdmin.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user && (
        <NavLink to={user.role === "admin" ? "/home-admin" : "/home-user"}>
          <img className="iconoCasa" src={iconoCasa} alt="iconoCasa" />
        </NavLink>
      )}

      <div className="icons-container">
        <img className="iconoLupa" src={iconoLupa} alt="iconoLupa" />
        <img className="iconoCampana" src={iconoCampana} alt="iconoCampana" />

        {user && user.role === "admin" ? (
          <img className="iconoUsuario" src={iconoAdmin} alt="iconoAdmin" />
        ) : (
          <img className="iconoUsuario" src={iconoUsuario} alt="iconoUsuario" />
        )}
      </div>
    </>
  );
};

export default Navbar;
