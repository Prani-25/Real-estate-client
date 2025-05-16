import React from "react";
import { useNavigate } from "react-router-dom";
import "./basicinfo.css";

function BasicInfo() {
  const navigate = useNavigate();

  const Next = () => {
    navigate("/propertydetails");
  };
  const Before = () => {
    navigate("/web");
  };

  return (
    <div>

      <div className="form-container">
        <div className="form-row">
          <div className="form-group"><label>Property Type</label><select><option>Select Property Type</option></select></div>
          <div className="form-group"><label>Negotiable</label><select><option>Select Negotiable</option></select></div>
          <div className="form-group"><label>Price</label><input type="text" placeholder="Example: 10000" /></div>
          <div className="form-group"><label>Ownership</label><select><option>Select Ownership</option></select></div>
          <div className="form-group"><label>Property Age</label><select><option>Select Property Age</option></select></div>
          <div className="form-group"><label>Property Approved</label><select><option>Property Approved</option></select></div>
          <div className="form-group"><label>Property Description</label><input type="text" /></div>
          <div className="form-group"><label>Bank Loan</label><select><option>Bank Loan</option></select></div>
        </div>

        <div className="form-actions">
          <button className="btn cancel" onClick={Before}>Cancel</button>
          <button className="btn save" onClick={Next}>Save & Continue</button>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
