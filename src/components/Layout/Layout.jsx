import React from "react";
import { Outlet, useLocation } from "react-router-dom"; 
import Stepper from "../Stepper/Stepper.jsx"; 
import "./Layout.css";

function Layout() {
  const userId = localStorage.getItem("userId") || "N/A";
  const email = localStorage.getItem("email") || "guest@example.com";
  const userName = email.split("@")[0];

  const location = useLocation(); // <-- Use current route
  const stepMap = {
    "/basicinfo": 1,
    "/propertydetails": 2,
    "/generalinfo": 3,
    "/locationinfo": 4,
  };

  const currentStep = stepMap[location.pathname] || 0;

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h1>Logo</h1>
          <nav>
            <div className="side-options"><i className="fas fa-home"></i> Property</div>
            <div className="side-options"><i className="fas fa-bell"></i> Assistance</div>
            <div className="side-options"><i className="fas fa-inbox"></i> Received Interest</div>
            <div className="side-options"><i className="fas fa-paper-plane"></i> Sent Interest</div>
            <div className="side-options"><i className="fas fa-eye"></i> Property Views</div>
            <div className="side-options"><i className="fas fa-tags"></i> Tariff Plan</div>
          </nav>
        </div>

        <div className="main">
          <div className="top-bar">
            <div>USER ID : {userId}</div>
            <div className="user-profile">
              <span role="img" aria-label="user">👤</span> {userName}
              <span className="arrow-down">
                <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginLeft: '3px' }}></i>
              </span>
            </div>
          </div>

          {/* ✅ Show stepper only on specific routes */}
          {currentStep > 0 && <Stepper currentStep={currentStep} />}

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
