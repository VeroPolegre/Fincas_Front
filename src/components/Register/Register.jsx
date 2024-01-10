import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, surname, email, password, password2 } = formData;
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [registerError, setRegisterError] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
    if (isError) {
      setRegisterError("Correo electrónico o contraseña incorrectos");
      setTimeout(() => {
        setRegisterError(null);
      }, 2000);
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
    if (!name) {
      validationErrors.name = "Introduzca su nombre";
    }
    if (!surname) {
      validationErrors.surname = "Introduzca su apellido";
    }
    if (!email) {
      validationErrors.email = "Introduzca una dirección de correo electrónico";
    }
    if (!password) {
      validationErrors.password = "Introduzca una contraseña";
    } else if (password.length < 6) {
      validationErrors.password =
        "La contraseña debe contener al menos 6 caracteres";
    }
    if (!password2) {
      validationErrors.password2 = "Porfavor, repita su contraseña";
    } else if (password !== password2) {
      validationErrors.password2 = "Las contraseñas no coinciden";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => {
        setErrors({});
      }, 2000);
      return;
    }

    setErrors({});
    setRegisterError(null);
    dispatch(register(formData));
  };
  return (
    <form onSubmit={onSubmit} className="form-register">
      <div className="custom-label-input">
        {/* <label htmlFor="nameFormRegister" className="material-symbols-outlined">
          nombre
        </label> */}
        <input
          type="text"
          name="name"
          placeholder="nombre"
          value={name}
          onChange={onChange}
          id="nameFormRegister"
        />{" "}
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="custom-label-input">
        {/* <label htmlFor="surnameFormRegister" className="material-symbols-outlined">
          apellido
        </label> */}
        <input
          type="text"
          name="surname"
          placeholder="apellido"
          value={surname}
          onChange={onChange}
          id="surnameFormRegister"
        />{" "}
        {errors.surname && <p>{errors.surname}</p>}
      </div>
      <div className="custom-label-input">
        {/* <label htmlFor="surnameFormRegister" className="material-symbols-outlined">
          correo electrónico
        </label> */}
        <input
          type="email"
          name="email"
          placeholder="correo electrónico"
          value={email}
          onChange={onChange}
          id="emailFormRegister"
        />{" "}
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div className="custom-label-input">
        {/* <label
          htmlFor="passwordFormRegister"
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
          id="passwordFormRegister"
        />{" "}
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="custom-label-input">
        {/* <label
          htmlFor="passwordFormRegister"
          className="material-symbols-outlined"
        >
          repetir contraseña
        </label> */}
        <input
          type="password"
          name="password2"
          placeholder="repetir contraseña"
          value={password2}
          onChange={onChange}
          id="password2FormRegister"
        />{" "}
        {errors.password2 && <p>{errors.password2}</p>}
      </div>

      <button type="submit">Registrarse</button>

      {registerError && <p>{registerError}</p>}

      <p className="redirect-message">
        ¿Ya estás registrado?<br></br>
        <a href="/login">Iniciar sesión</a>
      </p>
    </form>
  );
};

export default Register;
