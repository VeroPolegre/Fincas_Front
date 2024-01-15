import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import { uploadImage } from "../../features/certificates/certificatesSlice";
import "./CreateCertificate.scss";

export default function CreateCertificate() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadImage = () => {
    dispatch(uploadImage(file));
  };

  return (
    <>
      <Header />
      <h1>Actas</h1>
      <form>
        <label>
          Adjuntar archivo:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="button" onClick={handleUploadImage}>
          Resumir acta
        </button>
      </form>
    </>
  );
}
