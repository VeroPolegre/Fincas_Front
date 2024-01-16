import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import certificatesService from "./certificatesService";

const initialState = {
  uploading: false,
  uploadError: null,
  uploadResult: null,
  // loading: false,
  // imageUrl: "",
  // isError: false,
  // isSuccess: false,
  // message: "",
};

export const certificatesSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {
    reset: (state) => {
      // state.isError = false;
      // state.isSuccess = false;
      // state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.uploading = true;
        state.uploadError = null;
        state.uploadResult = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.uploading = false;
        state.uploadResult = action.payload;
        // state.isSuccess = true;
        // state.message = action.payload.message;
        // state.imageUrl = action.payload.imageUrl;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.uploading = false;
        state.uploadError = action.error.message;
        // state.isError = true;
        // state.message = action.payload;
      });
  },
});

export const { reset } = certificatesSlice.actions;

export const uploadFile = createAsyncThunk(
  "certificates/uploadFile",
  async (file, thunkAPI) => {
    try {
      const res = await certificatesService.uploadFile(file);
      return res;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue({
        errorMessage: error.message,
        status: error.status,
      });
    }
  }
);

export const selectCertificate = (state) => state.certificates;

export default certificatesSlice.reducer;
