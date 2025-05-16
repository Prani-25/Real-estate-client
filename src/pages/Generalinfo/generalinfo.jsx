import React from "react";
import { useNavigate } from "react-router-dom";
import "./generalinfo.css";

function Generalinfo() {
  const navigate = useNavigate();

  const Next = () => {
    navigate("/locationinfo");
  };

  const Before = () => {
    navigate("/propertydetails");
  };

  return (
<div className="form-container">
  <div className="form-row">

    <div className="form-group">
      <label>Name</label>
      <select>
        <option>Owner</option>
      </select>
    </div>

    <div className="form-group">
      <label>Mobile</label>
      <input type="text" placeholder="Enter Mobile Number" />
    </div>

    <div className="form-group">
      <label>Posted by</label>
      <select>
        <option>Posted By</option>
      </select>
    </div>

    <div className="form-group">
      <label>Sale Type</label>
      <select>
        <option>Please Select</option>
      </select>
    </div>

    <div className="form-group">
      <label>Featured Package</label>
      <select>
        <option>Please Select</option>
      </select>
    </div>

    <div className="form-group">
      <label>PPD Package</label>
      <select>
        <option>Please Select</option>
      </select>
    </div>

    <div className="photo-upload-wrapper">
      <div className="camera-circle">📷</div>
      <div className="add-photo-text">Add Photo</div>
    </div>

  </div>

  <div className="form-actions">
    <button className="btn previous" onClick={Before}>Previous</button>
    <button className="btn save" onClick={Next}>Save & Continue</button>
  </div>
  </div>
  );
}

export default Generalinfo;
