import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});


export const register = createAsyncThunk(
    "auth/register",
    async (user) => {
      try {
        return await authService.register(user);
      } catch (error) {
        console.error(error);
      }
    }
);  
    

export default authSlice.reducer;
  