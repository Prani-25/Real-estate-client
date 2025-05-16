import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/signup.jsx";
import Basicinfo from "./pages/BasicInfo/basicinfo.jsx";
import Propertydetails from "./pages/PropertyDetails/propertydetails.jsx";
import Generalinfo from "./pages/Generalinfo/generalinfo.jsx";
import Locationinfo from "./pages/LocationInfo/locationinfo.jsx";
import Login from "./pages/Login/login.jsx";
import Web from "./pages/Web/web.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/web" element={<Web />} />
          <Route path="/basicinfo" element={<Basicinfo />} />
          <Route path="/propertydetails" element={<Propertydetails />} />
          <Route path="/generalinfo" element={<Generalinfo />} />
          <Route path="/locationinfo" element={<Locationinfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
