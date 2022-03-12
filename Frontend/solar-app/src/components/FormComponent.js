import axios from "axios";
import React from "react";
import { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

export default function FormComponent() {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const stateData = [
    { state: "Tamil Nadu", lat: "11.059821", lon: "78.387451" },
    {
      state: "Telangana",
      lat: "17.123184",
      lon: "79.208824",
    },
    {
      state: "Madhya Pradesh",
      lat: "23.473324",
      lon: "77.947998",
    },
    {
      state: "Haryana",
      lat: "29.238478",
      lon: "76.431885",
    },
    {
      state: "Chhattisgarh",
      lat: "21.295132",
      lon: "81.828232",
    },
    {
      state: "Haryana",
      lat: "29.065773",
      lon: "76.040497",
    },
    {
      state: "Madhya Pradesh",
      lat: "25.794033",
      lon: "78.116531",
    },
    {
      state: "Maharashtra",
      lat: "19.601194",
      lon: "75.552979",
    },
    {
      state: "Tripura",
      lat: "23.745127",
      lon: "91.746826",
    },
    {
      state: "Chandoor",
      lat: "17.874857",
      lon: "78.100815",
    },
    {
      state: "Karnataka",
      lat: "15.317277",
      lon: "75.713890",
    },
    {
      state: "Kerala",
      lat: "10.850516",
      lon: "76.271080",
    },
    {
      state: "Uttar Pradesh",
      lat: "28.207609",
      lon: "79.826660",
    },
    {
      state: "Assam",
      lat: "26.244156",
      lon: "92.537842",
    },
    {
      state: "Maharashtra",
      lat: "19.663280",
      lon: "75.300293",
    },
    {
      state: "Tamil Nadu",
      lat: "11.127123",
      lon: "78.656891",
    },
    {
      state: "Karnataka",
      lat: "15.317277",
      lon: "75.713890",
    },
    {
      state: "West Bengal",
      lat: "22.978624",
      lon: "87.747803",
    },
    {
      state: "Gujarat",
      lat: "22.309425",
      lon: "72.136230",
    },
    {
      state: "Odisha",
      lat: "20.940920",
      lon: "84.803467",
    },
    {
      state: "Rajasthan, India",
      lat: "27.391277",
      lon: "73.432617",
    },
    {
      state: "Himachal Pradesh",
      lat: "32.084206",
      lon: "77.571167",
    },
  ];
  const [capacity, setCapacity] = useState(1);
  const [statename, setStatename] = useState(
    JSON.stringify({ state: "Tamil Nadu", lat: "11.059821", lon: "78.387451" })
  );
  const [category, setCategory] = useState("Residential");
  const [tempData, setTempData] = useState();
  const [cost, setcost] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showPopup = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          JSON.parse(statename).lat
        }&lon=${
          JSON.parse(statename).lon
        }&appid=57b0455c3ac9fcc2991aed2d12e53998`
      )
      .then((res) => {
        setTempData(res.data);
      })
      .then((e) => {
        handleShow();
      });
  };
  return (
    <div className="container">
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-6">
          <div className="card px-3 py-4">
            <h2 className="text-center">ENTER BELOW DETAILS</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="capacity" className="form-label">
                  Solar panel capacity wants to install (1 - 1000)kW
                </label>
                <div>{capacity} kW</div>
                <input
                  type="range"
                  className="form-range"
                  id="capacity"
                  min="1"
                  max="1000"
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="selectstate" className="form-label">
                  Select State
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setStatename(e.target.value)}
                >
                  {stateData.map((stateobj, index) => {
                    return (
                      <option value={JSON.stringify(stateobj)} key={index}>
                        {stateobj.state}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="selectcategory" className="form-label">
                  Select State
                </label>
                <select
                  className="form-select"
                  aria-label="Select Customer category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Residential">Residential</option>
                  <option value="Industerial">Industerial</option>
                  <option value="Institutional">Institutional</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Government">Government</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="electricitycost" className="form-label">
                  Average Electricity Cost
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="electricitycost"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={cost}
                    onChange={(e) => setcost(e.target.value)}
                    required
                  />
                  <span className="input-group-text" id="basic-addon2">
                    Rs. / Unit
                  </span>
                </div>
              </div>
              <button
                type="submit"
                onClick={showPopup}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Solar Rooftop Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                tempData ? <ul>
                <li>Capacity : {capacity} kW</li>
                <li>State : {JSON.parse(statename).state}</li>
                <li>Lattitude : {JSON.parse(statename).lat}</li>
                <li>Longtitude : {JSON.parse(statename).lon}</li>
                <li>Category : {category}</li>
                <li>Cost : {cost}</li>
                <li>Temperature :{(tempData.main.temp - 273.15).toFixed(2)} °C</li>
                <li>Humidity : {tempData.main.humidity}</li>
                <li>Wind Speed : {tempData.wind.speed} km/h</li>
                <li>Wind Direction : {tempData.wind.deg}°</li>
              </ul> : <Spinner animation="grow" variant="warning" />
            }
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
