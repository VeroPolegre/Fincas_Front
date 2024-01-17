import React from "react";
import iconoCasa from "../../../assets/iconoCasa.png";
import iconoLupa from "../../../assets/iconoLupa.png";
import iconoInfo from "../../../assets/iconoInfo.png";
import iconoCampana from "../../../assets/iconoCampana.png";
import iconoUsuario from "../../../assets/iconoUsuario.png";
import iconoAdmin from "../../../assets/iconoAdmin.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const currentPath = window.location.pathname;

  const showLupa = currentPath === "/home-admin";

  return (
    <>
      {user && (
        <NavLink to={user.role === "admin" ? "/home-admin" : "/home-user"}>
          <img className="iconoCasa" src={iconoCasa} alt="iconoCasa" />
        </NavLink>
      )}

      <div className="icons-container" style={{ marginLeft: 147 }}>
        {(showLupa ? (
          <img className="iconoLupa" src={iconoLupa} alt="iconoLupa" />
        ) : (
          <img className="iconoLupa" src={iconoInfo} alt="iconoInfo" />
        ))}
        <img className="iconoCampana" src={iconoCampana} alt="iconoCampana" />
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.thebridge.tech/"
                  >
                    The Bridge
                  </a>
                ),
              },
              {
                key: "2",
                danger: true,
                label: "Cerrar sesion",
              },
            ],
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            {user && user.role === "admin" ? (
              <img
                className="iconoUsuario"
                src={iconoAdmin}
                alt="iconoAdmin"
              />
            ) : (
              <img
                className="iconoUsuario"
                src={iconoUsuario}
                alt="iconoUsuario"
              />
            )}
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default Navbar;