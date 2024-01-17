import axios from "axios";

const API_URL = "http://16.170.236.176";

const uploadFile = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/subir_pdf`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

const getResume = async (data) => {
  try {
    const res = await axios.get(`${API_URL}/resumen`, data, {});
    return res;
  } catch (error) {
    throw error;
  }
};

const getAudio = async (data) => {
  try {
    const res = await axios.get(`${API_URL}/audio`, data, {});
    return res;
  } catch (error) {
    throw error;
  }
};

const certificatesService = {
  uploadFile,
  getResume,
  getAudio,
};

export default certificatesService;
