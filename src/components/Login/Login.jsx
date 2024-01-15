import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import iconoLogin from "../../assets/iconoLogin.png";
import iconoCasa from "../../assets/iconoCasa.png";
import lineaSeparadora from "../../assets/lineaSeparadora.png";
import iconoGoogle from "../../assets/iconoGoogle.png";
import iconoApple from "../../assets/iconoApple.png";
import iconoFacebook from "../../assets/iconoFacebook.png";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const { isSuccess, message, isError, user, auth } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      selectRole();
    }
    if (isError) {
      setLoginError("Email o contraseña incorrectos");
    }
    dispatch(reset());
  }, [isSuccess, message, isError, navigate, dispatch]);

  const selectRole = () => {
    if (auth !== null) {
      const { role } = user;
      if (role === "admin") {
        setTimeout(() => {
          navigate("/home-admin", {
            replace: true,
          });
        }, 1000);
      } else {
        setTimeout(() => {
          navigate("/home-user", {
            replace: true,
          });
        }, 1000);
      }
    }
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!email) {
      validationErrors.email = "Introduzca una dirección de correo electrónico";
    }
    if (!password) {
      validationErrors.password = "Introduzca una contraseña";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoginError(null);
    dispatch(login(formData));
  };

  return (
    <>
      <img className="iconoLogin" src={iconoLogin} alt="iconoLogin" />
      <h1>Iniciar sesión</h1>
      <p className="welcome-text">
        Tu vecino de confianza te<br></br>
        da la bienvenida
      </p>
      <form onSubmit={onSubmit} className="form-register">
        <div className="custom-label-input">
          <input
            type="text"
            name="email"
            placeholder="correo electrónico"
            value={email}
            onChange={onChange}
            id="usernameFormLogin"
          />{" "}
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="custom-label-input">
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            value={password}
            onChange={onChange}
            id="passwordFormLogin"
          />{" "}
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit" className="login-button">
          <img src={iconoCasa} alt="iconoCasa" />
          Iniciar sesión
        </button>
        <p className="forget-pass-txt">¿Has olvidado tu contraseña?</p>
        <img
          className="lineaSeparadora"
          src={lineaSeparadora}
          alt="lineaSeparadora"
        />

        <div className="rrss-icons">
          <img src={iconoGoogle} alt="iconoGoogle" />
          <img src={iconoApple} alt="iconoApple" />
          <img src={iconoFacebook} alt="iconoFacebook" />
        </div>

        {loginError && <p>{loginError}</p>}

        <p className="redirect-message">
          ¿Aún no tienes cuenta? <a href="./">Regístrate</a>
        </p>
      </form>
    </>
  );
};

export default Login;
