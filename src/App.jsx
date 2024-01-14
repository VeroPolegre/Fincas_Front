import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import CreateCertificate from "./pages/CreateCertificate/CreateCertificate";
import CreateIncident from "./pages/CreateIncident/CreateIncident";
import "./fonts.scss";
import Incidents from "./pages/Incidents/Incidents";
import IncidentConfirmation from "./pages/IncidentConfirmation/IncidentConfirmation";
import IncidentTracking from "./pages/IncidentTracking/IncidentTracking";
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
          <Route path="/create-certificate" element={<CreateCertificate />}>
            {" "}
          </Route>
          <Route path="/create-incident" element={<CreateIncident />}>
            {" "}
          </Route>
          <Route path="/incidents" element={<Incidents />}>
            {" "}
          </Route>
          <Route
            path="/incident-confirmation"
            element={<IncidentConfirmation />}
          >
            {" "}
          </Route>
          <Route path="/incident-tracking" element={<IncidentTracking />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
