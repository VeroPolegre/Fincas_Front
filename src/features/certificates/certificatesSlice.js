import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import certificatesService from "./certificatesService";

const initialState = {
  uploading: false,
  uploadError: null,
  uploadResult: null,
  resumeText: null,
  resumeAudio: null,
  isError: false,
  isSuccess: false,
  message: "",
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
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.uploading = false;
        state.uploadError = action.error.message;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getResume.fulfilled, (state, action) => {
        state.resumeText = action.payload.data;
      })
      .addCase(getResume.rejected, (state, action) => {})
      .addCase(getAudio.fulfilled, (state, action) => {
        state.resumeAudio = action.payload.data;
      })
      .addCase(getAudio.rejected, (state, action) => {});
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

export const getResume = createAsyncThunk(
  "certificates/getResume",
  async (data, thunkAPI) => {
    try {
      const res = await certificatesService.getResume(data);
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
export const getAudio = createAsyncThunk(
  "certificates/getAudio",
  async (data, thunkAPI) => {
    try {
      const res = await certificatesService.getAudio(data);
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
