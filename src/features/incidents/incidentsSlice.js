import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import incidentsService from "./incidentsService";

const initialState = {
  selectedImage: null,
  loading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const incidentsSlice = createSlice({
  name: "incidents",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    clearImage: (state) => {
      state.selectedImage = null;
    },
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
        state.selectedImage = action.payload.imageUrl;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { setImage, clearImage, reset } = incidentsSlice.actions;

export const uploadImage = createAsyncThunk(
  "incidents/uploadImage",
  async (imageFile, thunkAPI) => {
    try {
      const imageUrl = await incidentsService.uploadImage(imageFile);
      return { message: "Image uploaded successfully", imageUrl };
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const selectIncidents = (state) => state.incidents;

export default incidentsSlice.reducer;
