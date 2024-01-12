import axios from "axios";

const API_URL = "";

const uploadImage = async (base64) => {
  try {
    const res = await axios.post(`${API_URL}/uploadImage`, {
      image: base64,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

const certificateService = {
  uploadImage,
};

export default certificateService;
