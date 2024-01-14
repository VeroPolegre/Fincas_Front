import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import certificates from "../features/certificates/certificatesSlice";
import incidents from "../features/incidents/incidentsSlice";

export const store = configureStore({
  reducer: {
    auth,
    certificates,
    incidents,
  },
});
