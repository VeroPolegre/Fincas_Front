import axios from "axios";

const API_URL = "https://fincas-back-dev-kgax.1.us-1.fl0.io/incidents";
const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await axios.post(`${API_URL}/upload`, formData);

    return res.data.imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

const incidentsService = {
  uploadImage,
};

export default incidentsService;
