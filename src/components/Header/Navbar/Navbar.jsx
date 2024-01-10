import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onSearchTypeChange }) => {
  if (!user) {
    return "Navbar";
  }
  const location = useLocation();
  const [showHomeMenu, setShowHomeMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleExploreImages = () => {
    onSearchTypeChange("post");
  };

  const handleExploreUsers = () => {
    onSearchTypeChange("user");
  };

  const handleOnClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setShowHomeMenu(location.pathname === "/");
    setShowUserMenu(location.pathname === "/profile");
    setShowExploreMenu(location.pathname === "/explore");
  }, [location]);

  if (showHomeMenu) {
    return (
      <header>
        <section>
          <h4>Consejo General de Colegios de Administradores de Fincas</h4>
        </section>
        <section>
          <span className="material-symbols-outlined">favorite</span>
          <ConfigNav visible={isModalVisible} onCancel={handleCancel} />
          <Link to="#" onClick={showModal}>
            <span className="material-symbols-outlined">menu</span>
          </Link>
        </section>
        <div>
          <span className="material-symbols-outlined right-border">
            explore
          </span>
          <span className="material-symbols-outlined" onClick={handleOnClick}>
            group
          </span>
        </div>
      </header>
    );
  } else if (showUserMenu) {
    return (
      <header>
        <section>
          <h4>{user.username}</h4>
        </section>
        <section>
          <ConfigNav visible={isModalVisible} onCancel={handleCancel} />
          <Link to="#" onClick={showModal}>
            <span className="material-symbols-outlined">menu</span>
          </Link>
        </section>
      </header>
    );
  } else if (showExploreMenu) {
    return (
      <header>
        <section>
          <h4>Consejo General de Colegios de Administradores de Fincas</h4>
        </section>
        <section>
          <span className="material-symbols-outlined">favorite</span>
          <ConfigNav visible={isModalVisible} onCancel={handleCancel} />
          <Link to="#" onClick={showModal}>
            <span className="material-symbols-outlined">menu</span>
          </Link>{" "}
        </section>
        <div>
          <span
            onClick={handleExploreImages}
            className="material-symbols-outlined right-border"
          >
            grid_on
          </span>
          <span
            onClick={handleExploreUsers}
            className="material-symbols-outlined"
          >
            person
          </span>
        </div>
      </header>
    );
  } else {
    return (
      <>
        <header>
          <section>
            <h4>Consejo General de Colegios de Administradores de Fincas</h4>
          </section>
          <section>
            <span className="material-symbols-outlined">favorite</span>
            <span className="material-symbols-outlined">menu</span>
          </section>
        </header>
      </>
    );
  }
};

export default Navbar;
