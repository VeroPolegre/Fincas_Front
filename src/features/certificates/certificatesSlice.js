import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import certificatesService from "./certificatesService";

const initialState = {
  loading: false,
  imageUrl: "", // Change from "url" to "imageUrl" for clarity
  isError: false,
  isSuccess: false,
  message: "",
};

export const certificatesSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.message;
        state.imageUrl = action.payload.imageUrl;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = certificatesSlice.actions;

export const uploadImage = createAsyncThunk(
  "certificates/uploadImage",
  async (file, thunkAPI) => {
    try {
      const imageUrl = await certificatesService.uploadImage(file);
      return { message: "Image uploaded successfully", imageUrl };
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const selectCertificate = (state) => state.certificates;

export default certificatesSlice.reducer;
