import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, login, reset } from "../../features/auth/authSlice";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import "./Register.scss";

const Register = () => {
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
      navigate("/");
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
        <label
          htmlFor="usernameFormLogin"
          className="material-symbols-outlined"
        >
          nombre
        </label>
        <input
          type="text"
          name="nombre"
          placeholder="nombre"
          value={name}
          onChange={onChange}
          id="usernameFormLogin"
        />{" "}
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="custom-label-input">
        <label
          htmlFor="nameFormLogin"
          className="material-symbols-outlined"
        >
          apellido
        </label>
        <input
          type="text"
          name="apellido"
          placeholder="apellido"
          value={name}
          onChange={onChange}
          id="surnameFormLogin"
        />{" "}
        {errors.surname && <p>{errors.surname}</p>}
      </div>

      <div className="custom-label-input">
        <label
          htmlFor="passwordFormLogin"
          className="material-symbols-outlined"
        >
          contraseña
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
          id="passwordFormLogin"
        />{" "}
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="custom-label-input">
        <label
          htmlFor="passwordFormLogin"
          className="material-symbols-outlined"
        >
          repetir contraseña
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
          id="password2FormLogin"
        />{" "}
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Iniciar sesión</button>

      {loginError && <p>{loginError}</p>}

      <p className="redirect-message">
        Ya estas registrado?<br></br>
        <a href="../login">Iniciar sesión</a>
      </p>
    </form>
  );
};


export default Register;
