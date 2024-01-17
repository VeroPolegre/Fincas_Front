import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts.scss";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./pages/Profile/Profile";
import CreateCertificate from "./pages/CreateCertificate/CreateCertificate";
import CreateIncident from "./pages/CreateIncident/CreateIncident";
import HomeUser from "./pages/HomeUser/HomeUser";
import Incidents from "./pages/Incidents/Incidents";
import IncidentConfirmation from "./pages/IncidentConfirmation/IncidentConfirmation";
import IncidentTracking from "./pages/IncidentTracking/IncidentTracking";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmin";
import CertificateConfirmation from "./pages/CertificateConfirmation/CertificateConfirmation";
import SearchComunity from "./pages/SearchComunity/SearchComunity";
import CertificateDetails from "./pages/CertificateDetails/CertificateDetails";
import SearchComunityDetail from "./pages/SearchComunityDetail/SearchComunityDetail";
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
          <Route path="/certificate-details" element={<CertificateDetails />}>
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
          <Route path="/home-user" element={<HomeUser />}>
            {" "}
          </Route>
          <Route path="/home-admin" element={<HomeAdmin />}>
            {" "}
          </Route>
          <Route
            path="/certificate-confirmation"
            element={<CertificateConfirmation />}
          >
            {" "}
          </Route>
          <Route path="/search-comunity" element={<SearchComunity />}>
            {" "}
          </Route>
          <Route
            path="/search-comunity-detail"
            element={<SearchComunityDetail />}
          >
            {" "}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
