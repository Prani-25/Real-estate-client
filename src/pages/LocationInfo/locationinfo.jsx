import React from "react";
import { useNavigate } from "react-router-dom";
import "./locationinfo.css";

function Locationinfo() {
  const navigate = useNavigate();

  const Next = () => {
    navigate("/web");
  };

  const Before = () => {
    navigate("/propertydetails");
  };

  return (
    
    <div className="form-container">
  <div className="form-row">

    <div className="form-group">
      <label>Email</label>
      <input type="text" placeholder="Email" />
    </div>

    <div className="form-group">
      <label>City</label>
      <select>
        <option>Select City</option>
        <option>Hyderabad</option>
        <option>Bangalore</option>
        <option>Mumbai</option>
        <option>Chennai</option>
        <option>Delhi</option>
      </select>
    </div>

    <div className="form-group">
      <label>Area</label>
      <select>
        <option>Select Area</option>
        <option>Madhapur</option>
        <option>Kondapur</option>
        <option>Jubilee Hills</option>
        <option>Begumpet</option>
        <option>Gachibowli</option>
      </select>
    </div>

    <div className="form-group">
      <label>Pincode</label>
      <select>
        <option>Select Pincode</option>
        <option>500081</option>
        <option>560001</option>
        <option>400001</option>
        <option>600001</option>
        <option>110001</option>
      </select>
    </div>

    <div className="form-group">
      <label>Address</label>
      <input type="text" placeholder="Address" />
    </div>

    <div className="form-group">
      <label>Landmark</label>
      <input type="text" placeholder="Landmark" />
    </div>

    <div className="form-group">
      <label>Latitude</label>
      <input type="text" placeholder="Latitude" />
    </div>

    <div className="form-group">
      <label>Longitude</label>
      <input type="text" placeholder="Longitude" />
    </div>

  </div>

  <div className="form-actions">
    <button className="btn previous" onClick={Before}>Previous</button>
    <button className="btn add" onClick={Next}>Add Property</button>
  </div>
</div>

   
  );
}

export default Locationinfo;
