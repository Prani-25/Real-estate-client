import React from "react";
import { useNavigate } from "react-router-dom";
import "./web.css";

function Web() {
  const navigate = useNavigate();
  
  // Get userId and email from localStorage
  const userId = localStorage.getItem("userId") || "N/A";
  const email = localStorage.getItem("email") || "guest@example.com";

  const Next = () => {
    navigate("/basicinfo", { state: { userId, userName: email.split("@")[0] } });
  };

  return (
     <div className="container">
      
      <div className="main">

      <div className="search-bar">
            <div className="search-input-wrapper">
            <input type="text" placeholder="Search PPD ID" />
            <i className="fas fa-search" style={{fontSize:"18px"}}></i>

            </div>
            <button className="add-button" onClick={Next}>+ Add Property</button>
      </div>


      <div className="table-wrapper">
      <div className="table-full">
      <div className="table-header">
        <div>PPD ID</div>
        <div>Image</div>
        <div>Property</div>
        <div>Contact</div>
        <div>Area</div>
        <div>Views</div>
        <div>Status</div>
        <div>Days Left</div>
        <div>Action</div>
      </div>

    {/* Data Row */}
    <div className="table-row">
      <div>PPD1125</div>
      <div>🖼</div>
      <div>Plot</div>
      <div>97852 52525</div>
      <div>1200</div>
      <div>02</div>
      <div>
        <span className="status-sold">Sold</span>
      </div>
      <div>00</div>
      <div className="action-icons">👁 ✏</div>
    </div>

       <div className="table-row">
      <div>PPD1125</div>
      <div>🖼</div>
      <div>Plot</div>
      <div>97852 52525</div>
      <div>1200</div>
      <div>02</div>
      <div>
        <span className="status-sold">Sold</span>
      </div>
      <div>00</div>
      <div className="action-icons">👁 ✏</div>
    </div>

  </div>
</div>


      </div>
    </div>
  );
}

export default Web;