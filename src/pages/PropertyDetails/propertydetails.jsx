import { useNavigate } from "react-router-dom";
import "./propertydetails.css";

function Propertydetails() {
  const navigate = useNavigate();

  const Next = () => {
    navigate("/generalinfo");
  };

  const Before = () => {
    navigate("/basicinfo");
  };

  return (

   <div className="form-container">
  <div className="form-row">

    <div className="form-group">
      <label>Length</label>
      <input type="text" placeholder="Example: 1000" />
    </div>

    <div className="form-group">
      <label>Breath</label>
      <input type="text" placeholder="Example: 1000" />
    </div>

    <div className="form-group">
      <label>Total Area</label>
      <input type="text" placeholder="Example: 7500" />
    </div>

    <div className="form-group">
      <label>Area Unit</label>
      <select>
        <option>Area Unit</option>
        <option>Square Feet</option>
        <option>Square Yards</option>
        <option>Square Meters</option>
        <option>Acres</option>
        <option>Hectares</option>
      </select>
    </div>

    <div className="form-group">
      <label>No of BHK</label>
      <select>
        <option>Select No of BHK</option>
        <option>1 BHK</option>
        <option>2 BHK</option>
        <option>3 BHK</option>
        <option>4 BHK</option>
        <option>5+ BHK</option>
      </select>
    </div>

    <div className="form-group">
      <label>No of Floor</label>
      <select>
        <option>Select No of Floor</option>
        <option>Ground</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4+</option>
      </select>
    </div>

    <div className="form-group">
      <label>Attached</label>
      <select>
        <option>Select Attached</option>
        <option>Yes</option>
        <option>No</option>
        <option>1 Bathroom Attached</option>
        <option>All Bathrooms Attached</option>
        <option>Partial</option>
      </select>
    </div>

    <div className="form-group">
      <label>Western Toilet</label>
      <select>
        <option>Select Western Toilet</option>
        <option>Yes</option>
        <option>No</option>
        <option>One Only</option>
        <option>All</option>
        <option>Mix of Indian and Western</option>
      </select>
    </div>

    <div className="form-group">
      <label>Furnished</label>
      <select>
        <option>Select Furnished</option>
        <option>Unfurnished</option>
        <option>Semi-Furnished</option>
        <option>Fully Furnished</option>
        <option>Only Kitchen Furnished</option>
        <option>Furnished with Appliances</option>
      </select>
    </div>

    <div className="form-group">
      <label>Car Parking</label>
      <select>
        <option>Select Car Parking</option>
        <option>No Parking</option>
        <option>1 Car</option>
        <option>2 Cars</option>
        <option>Basement Parking</option>
        <option>Open Parking</option>
      </select>
    </div>

    <div className="form-group">
      <label>Lift</label>
      <select>
        <option>Select Lift</option>
        <option>No</option>
        <option>Yes - Manual</option>
        <option>Yes - Automatic</option>
        <option>Available for All Floors</option>
        <option>Private Lift</option>
      </select>
    </div>

    <div className="form-group">
      <label>Electricity</label>
      <input type="text" placeholder="Example: 3 phase" />
    </div>

    <div className="form-group">
      <label>Facing</label>
      <select>
        <option>Select Facing</option>
        <option>East</option>
        <option>West</option>
        <option>North</option>
        <option>South</option>
        <option>North-East</option>
      </select>
    </div>

  </div>

  <div className="form-actions">
    <button className="btn previous" onClick={Before}>Previous</button>
    <button className="btn save" onClick={Next}>Save & Continue</button>
  </div>
</div>



  );
}

export default Propertydetails;
