import axios from "axios";
import React from "react";
import { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

export default function FormComponent() {
  const stateData = [
    { state: "Tamil Nadu", 
	lat: "11.059821", 
	lon: "78.387451",
	ghi: "1957",
	0to100 : "Nil",
	101to200 : "3.5",
	201to500 : "4.6",
	Above500 : "6.6",
    },
    {
      state: "Telangana",
      lat: "17.123184",
      lon: "79.208824",
	ghi: "1949",
	0to100 : "3.3",
	101to200 : "4.3",
	201to500 : "7.85",
	Above500 : "8.75",
    },
    {
      state: "Madhya Pradesh",
      lat: "23.473324",
      lon: "77.947998",
	ghi: "1900",
	0to100 : "4.13",
	101to200 : "5.05",
	201to500 : "6.4",
	Above500 : "8.73",
    },
    {
      state: "Haryana",
      lat: "29.238478",
      lon: "76.431885",
	ghi: "1702",
	0to100 : "3.6",
	101to200 : "4.75",
	201to500 : "5.55",
	Above500 : "6.75",
    },
    {
      state: "Chhattisgarh",
      lat: "21.295132",
      lon: "81.828232",
	ghi: "1883",
	0to100 : "4.5",
	101to200 : "4.95",
	201to500 : "5.6",
	Above500 : "6.5",
	
    },
    {
      state: "Haryana",
      lat: "29.065773",
      lon: "76.040497",
	ghi: "1702",
	0to100 : "3.6",
	101to200 : "4.75",
	201to500 : "5.55",
	Above500 : "6.75",
    },
    {
      state: "Maharashtra",
      lat: "19.601194",
      lon: "75.552979",
	ghi: "1931",
	0to100 : "3.22",
	101to200 : "5.92",
	201to500 : "8.89",
	Above500 : "10.47",
    },
    {
      state: "Tripura",
      lat: "23.745127",
      lon: "91.746826",
	ghi: "1663",
	0to100 : "3.6",
	101to200 : "4.75",
	201to500 : "5.55",
	Above500 : "6.75",
    },
    {
      state: "Karnataka",
      lat: "15.317277",
      lon: "75.713890",
	ghi: "1941",
	0to100 : "4.10",
	101to200 : "5.55",
	201to500 : "7.10",
	Above500 : "8.15",
    },
    {
      state: "Kerala",
      lat: "10.850516",
      lon: "76.271080",
	ghi: "1974",
	0to100 : "3.70",
	101to200 : "5.50",
	201to500 : "6.90",
	Above500 : "7.90",
    },
    {
      state: "Uttar Pradesh",
      lat: "28.207609",
      lon: "79.826660",
	ghi: "1720"
	0to100 : "5.50",
	101to200 : "6.00",
	201to500 : "6.50",
	Above500 : "7.00",
    },
    {
      state: "Assam",
      lat: "26.244156",
      lon: "92.537842",
	ghi: "1617",
	0to100 : "4.90",
	101to200 : "6.15",
	201to500 : "6.75",
	Above500 : "7.15",
    },
    {
      state: "Tamil Nadu",
      lat: "11.127123",
      lon: "78.656891",
	ghi: "1957",
	0to100 : "0.00",
	101to200 : "3.50",
	201to500 : "4.60",
	Above500 : "6.60",
    },
    {
      state: "Karnataka",
      lat: "15.317277",
      lon: "75.713890",
	ghi: "1941",
	0to100 : "4.10",
	101to200 : "5.55",
	201to500 : "7.10",
	Above500 : "8.15",
    },
    {
      state: "West Bengal",
      lat: "22.978624",
      lon: "87.747803",
	ghi: "1696",
	0to100 : "5.26",
	101to200 : "5.86",
	201to500 : "6.98",
	Above500 : "8.50",
    },
    {
      state: "Gujarat",
      lat: "22.309425",
      lon: "72.136230",
	ghi: "2026",
	0to100 : "3.1",
	101to200 : "3.75",
	201to500 : "4.90",
	Above500 : "5.05",
    },
    {
      state: "Odisha",
      lat: "20.940920",
      lon: "84.803467",
	ghi: "1795",
	0to100 : "3.00",
	101to200 : "4.80",
	201to500 : "5.80",
	Above500 : "6.20",
    },
    {
      state: "Rajasthan",
      lat: "27.391277",
      lon: "73.432617",
	ghi: "1896",
	0to100 : "6.50",
	101to200 : "7.35",
	201to500 : "7.65",
	Above500 : "7.95",
    },
    {
      state: "Uttarakhand",
      lat: "30.0668",
      lon: "79.0193°",
	ghi: "1783",
	0to100 : "3.42",
	101to200 : "4.20",
	201to500 : "5.30",
	Above500 : "6.64",
    },
    {
      state: "Sikkim",
      lat: "27.5330",
      lon: "88.5122°",
	ghi: "1471",
	0to100 : "2.00",
	101to200 : "3.00",
	201to500 : "3.50",
	Above500 : "4.00",
    },
	{
      state: "Punjab",
      lat: "31.1471",
      lon: "75.3412°",
	ghi: "1702",
	0to100 : "3.49",
	101to200 : "5.84",
	201to500 : "7.30",
	Above500 : "8.85",
	
    },
	{
      state: "Puducherry",
      lat: "11.9416",
      lon: "79.8083°",
	ghi: "2017",
	0to100 : "5.60",
	101to200 : "6.65",
	201to500 : "7.40",
	Above500 : "8.64",
    },
	{
      state: "NCT of Delhi",
      lat: "28.7041",
      lon: "77.1025°",
	ghi: "1711",
	0to100 : "3.00",
	101to200 : "4.50",
	201to500 : "6.50",
	Above500 : "7.00",
    },
	{
      state: "Nagaland",
      lat: "26.1584",
      lon: "94.5624",
	ghi: "1484",
	0to100 : "4.50",
	101to200 : "5.40",
	201to500 : "6.00",
	Above500 : "7.00",
    },
	{
      state: "Mizoram",
      lat: "23.1645",
      lon: "92.9376",
	ghi: "1730",
	0to100 : "4.80",
	101to200 : "5.50",
	201to500 : "5.90",
	Above500 : "6.55",
    },
	{
      state: "Maghalaya",
      lat: "25.4670",
      lon: "91.3662",
	ghi: "1578",
	0to100 : "3.65",
	101to200 : "4.00",
	201to500 : "4.40",
	Above500 : "6.00",
	
    },
	{
      state: "Manipur",
      lat: "24.6637",
      lon: "93.9063",
	ghi: "1716",
	0to100 : "4.2",
	101to200 : "5.5",
	201to500 : "6.40",
	Above500 : "7.64",
	
    },
	{
      state: "Jharkhand",
      lat: "23.6102",
      lon: "85.2799",
	ghi: "1854",
	0to100 : "3.14",
	101to200 : "4.64",
	201to500 : "6.50",
	Above500 : "7.50",
	
    },
	{
      state: "Jammu and Kashmir",
      lat: "33.2778",
      lon: "75.3412",
	ghi: "1738",
	0to100 : "1.4",
	101to200 : "3.00",
	201to500 : "6.50",
	Above500 : "7.00",,
    },
	{
      state: "Goa",
      lat: "15.2993",
      lon: "74.1240",
	ghi: "1950",
	0to100 : "3.25",
	101to200 : "3.90",
	201to500 : "4.70",
	Above500 : "5.75",
    },
	{
      state: "Bihar",
      lat: "25.0961",
      lon: "85.3131",
	ghi: "1724",
	0to100 : "6.10",
	101to200 : "6.95",
	201to500 : "8.05",
	Above500 : "9.75",
    },
	{
      state: "Chhattisgarh",
      lat: "21.2787",
      lon: "81.8661",
	ghi: "1883",
	0to100 : "4.5",
	101to200 : "4.95",
	201to500 : "5.6",
	Above500 : "6.5",
    },
	{
      state: "Dadra And Nagar Haveli",
      lat: "20.1809",
      lon: "73.0169",
	ghi: "1920",
	0to100 : "3.44"
	101to200 : "7.34"
	201to500 : "10.35"
	Above500 : "11.82"
    },
	{
      state: "Daman",
      lat: "20.3974",
      lon: "72.8328",
	ghi: "1964",
	0to100 : "1.4",
	101to200 : "3.00",
	201to500 : "6.50",
	Above500 : "7.00",
    },
	{
      state: "Andaman and Nicobar",
      lat: "11.7401",
      lon: "92.6586",
	ghi: "1828",
	0to100 : "2.05",
	101to200 : "2.05",
	201to500 : "7.2",
	Above500 : "7.5",
    },
	{
      state: "Anurachal Pradesh",
      lat: "28.2180",
      lon: "94.7278",
	ghi: "1428",
	0to100 : "2.65",
	101to200 : "4.30",
	201to500 : "6.50",
	Above500 : "7.75",
    },
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
                  value={capacity}
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
              <li>GHI : {JSON.parse(statename).ghi} </li>
              <li>Lattitude : {JSON.parse(statename).lat}</li>
              <li>Longtitude : {JSON.parse(statename).lon}</li>
              <li>Category : {category}</li>
              <li>Cost : {cost} Rs./Unit</li>
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
