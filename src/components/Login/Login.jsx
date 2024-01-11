import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }
    if (isError) {
      setLoginError("Email o contraseña incorrectos");
    }
    dispatch(reset());
  }, [isSuccess, message, isError]);

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
    <form onSubmit={onSubmit} className="form-register">
      <div className="custom-label-input">
        {/* <label
          htmlFor="usernameFormLogin"
          className="material-symbols-outlined"
        >
          correo electrónico
        </label> */}
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
        {/* <label
          htmlFor="passwordFormLogin"
          className="material-symbols-outlined"
        >
          contraseña
        </label> */}
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

      <button type="submit">Iniciar sesión</button>

      {loginError && <p>{loginError}</p>}

      <p className="redirect-message">
        ¿No estás registrado?<br></br>
        <a href="./">Registrate aquí</a>
      </p>
    </form>
  );
};

export default Login;
