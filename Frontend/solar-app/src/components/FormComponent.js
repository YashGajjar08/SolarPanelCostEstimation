import axios from "axios";
import React from "react";
import { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

export default function FormComponent() {
  const stateData = [
    { state: "Tamil Nadu", lat: "11.059821", lon: "78.387451", ghi: "1957" },
    {
      state: "Telangana",
      lat: "17.123184",
      lon: "79.208824",
      ghi: "1949",
    },
    {
      state: "Madhya Pradesh",
      lat: "23.473324",
      lon: "77.947998",
      ghi: "1900",
    },
    {
      state: "Haryana",
      lat: "29.238478",
      lon: "76.431885",
      ghi: "1702",
    },
    {
      state: "Chhattisgarh",
      lat: "21.295132",
      lon: "81.828232",
      ghi: "1883",
    },
    {
      state: "Haryana",
      lat: "29.065773",
      lon: "76.040497",
      ghi: "1702",
    },
    {
      state: "Maharashtra",
      lat: "19.601194",
      lon: "75.552979",
      ghi: "1931",
    },
    {
      state: "Tripura",
      lat: "23.745127",
      lon: "91.746826",
      ghi: "1663",
    },
    {
      state: "Karnataka",
      lat: "15.317277",
      lon: "75.713890",
      ghi: "1941",
    },
    {
      state: "Kerala",
      lat: "10.850516",
      lon: "76.271080",
      ghi: "1974",
    },
    {
      state: "Uttar Pradesh",
      lat: "28.207609",
      lon: "79.826660",
      ghi: "1720",
    },
    {
      state: "Assam",
      lat: "26.244156",
      lon: "92.537842",
      ghi: "1617",
    },
    {
      state: "Tamil Nadu",
      lat: "11.127123",
      lon: "78.656891",
      ghi: "1957",
    },
    {
      state: "Karnataka",
      lat: "15.317277",
      lon: "75.713890",
      ghi: "1941",
    },
    {
      state: "West Bengal",
      lat: "22.978624",
      lon: "87.747803",
      ghi: "1696",
    },
    {
      state: "Gujarat",
      lat: "22.309425",
      lon: "72.136230",
      ghi: "2026",
    },
    {
      state: "Odisha",
      lat: "20.940920",
      lon: "84.803467",
      ghi: "1795",
    },
    {
      state: "Rajasthan",
      lat: "27.391277",
      lon: "73.432617",
      ghi: "1896",
    },
    {
      state: "Uttarakhand",
      lat: "30.0668",
      lon: "79.0193°",
      ghi: "1783",
    },
    {
      state: "Sikkim",
      lat: "27.5330",
      lon: "88.5122°",
      ghi: "1471",
    },
    {
      state: "Punjab",
      lat: "31.1471",
      lon: "75.3412°",
      ghi: "1702",
    },
    {
      state: "Puducherry",
      lat: "11.9416",
      lon: "79.8083°",
      ghi: "2017",
    },
    {
      state: "NCT of Delhi",
      lat: "28.7041",
      lon: "77.1025°",
      ghi: "1711",
    },
    {
      state: "Nagaland",
      lat: "26.1584",
      lon: "94.5624",
      ghi: "1484",
    },
    {
      state: "Mizoram",
      lat: "23.1645",
      lon: "92.9376",
      ghi: "1730",
    },
    {
      state: "Maghalaya",
      lat: "25.4670",
      lon: "91.3662",
      ghi: "1578",
    },
    {
      state: "Manipur",
      lat: "24.6637",
      lon: "93.9063",
      ghi: "1716",
    },
    {
      state: "Jharkhand",
      lat: "23.6102",
      lon: "85.2799",
      ghi: "1854",
    },
    {
      state: "Jammu and Kashmir",
      lat: "33.2778",
      lon: "75.3412",
      ghi: "1738",
    },
    {
      state: "Goa",
      lat: "15.2993",
      lon: "74.1240",
      ghi: "1950",
    },
    {
      state: "Bihar",
      lat: "25.0961",
      lon: "85.3131",
      ghi: "1724",
    },
    {
      state: "Chhattisgarh",
      lat: "21.2787",
      lon: "81.8661",
      ghi: "1883",
    },
    {
      state: "Dadra And Nagar Haveli",
      lat: "20.1809",
      lon: "73.0169",
      ghi: "1920",
    },
    {
      state: "Daman",
      lat: "20.3974",
      lon: "72.8328",
      ghi: "1964",
    },
    {
      state: "Andaman and Nicobar",
      lat: "11.7401",
      lon: "92.6586",
      ghi: "1828",
    },
    {
      state: "Anurachal Pradesh",
      lat: "28.2180",
      lon: "94.7278",
      ghi: "1428",
    }
  ];
  const [capacity, setCapacity] = useState(1);
  const [statename, setStatename] = useState(
    JSON.stringify(stateData[0])
  );
  const [category, setCategory] = useState("Residential");
  const [tempData, setTempData] = useState(null);
  const [cost, setcost] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setTempData(null);
  };
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
      });
    //   .then((e) => {
    //     handleShow();
    //   });
    handleShow();
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
          {tempData ? (
            <ul>
              <li>Capacity : {capacity} kW</li>
              <li>State : {JSON.parse(statename).state}</li>
              <li>GHI : {JSON.parse(statename).ghi}</li>
              <li>Lattitude : {JSON.parse(statename).lat}</li>
              <li>Longtitude : {JSON.parse(statename).lon}</li>
              <li>Category : {category}</li>
              <li>Cost : {cost}</li>
              <li>
                Temperature : {(tempData.main.temp - 273.15).toFixed(2)} °C
              </li>
              <li>Humidity : {tempData.main.humidity}</li>
              <li>Wind Speed : {tempData.wind.speed} km/h</li>
              <li>Wind Direction : {tempData.wind.deg}°</li>
            </ul>
          ) : (
            <div className="text-center">
              <Spinner animation="grow" variant="warning" />
            </div>
          )}
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
