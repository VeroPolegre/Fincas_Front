import { createSlice } from "@reduxjs/toolkit";
import certificateService from "./certificateService";

const initialState = {
  loading: false,
  url: "",
};

const certificateSlice = createSlice({
  name: "certificate",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setLoading, setUrl } = certificateSlice.actions;

export const uploadImage = (file) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const url = await certificateService.uploadImage(file);

    dispatch(setUrl(url));
    alert("Image uploaded successfully");
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const selectCertificate = (state) => state.certificate;

export default certificateSlice.reducer;
