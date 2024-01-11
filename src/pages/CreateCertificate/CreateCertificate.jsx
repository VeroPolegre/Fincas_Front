import React, { useState } from "react";
import Header from "../../components/Header/Header";

const CreateCertificate = () => {
  const [comunidad, setComunidad] = useState("");
  const [archivo, setArchivo] = useState(null);

  const handleComunidadChange = (event) => {
    setComunidad(event.target.value);
  };

  const handleFileChange = (event) => {
    // Manejar la lógica para el archivo aquí, por ejemplo, guardar en el estado.
    setArchivo(event.target.files[0]);
  };

  const handleResumirClick = () => {
    // Lógica para resumir con el archivo adjunto.
    console.log("Resumiendo con la comunidad:", comunidad, "y el archivo:", archivo);
  };

  return (
    <>
      <Header />
      <h1>Actas</h1>
      <form>
        <label>
          Comunidad:
          <select value={comunidad} onChange={handleComunidadChange}>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
            <option value="opcion4">Opción 4</option>
          </select>
        </label>
        <br />
        <label>
          Adjuntar archivo:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="button" onClick={handleResumirClick}>
          Resumir
        </button>
      </form>
    </>
  );
};

export default CreateCertificate;
