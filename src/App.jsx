import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import CreateCertificate from "./pages/CreateCertificate/CreateCertificate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />}>
            {" "}
          </Route>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/profile" element={<Profile />}>
            {" "}
          </Route>
          <Route path="/createcertificate" element={<CreateCertificate />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
