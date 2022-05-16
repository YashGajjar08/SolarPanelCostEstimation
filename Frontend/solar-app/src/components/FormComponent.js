import axios from "axios";
import React from "react";
import { useState } from "react";
import { Modal, Button, Spinner, Table, Accordion } from "react-bootstrap";
import Card from "./Card";

export default function FormComponent() {
  const stateData = [
    {
      state: "Telangana",
      lat: "17.123184",
      lon: "79.208824",
      ghi: "1949",
      zeroToHundred: "3.3",
      OhoToTh: "4.3",
      ThoToFh: "7.85",
      Above500: "8.75",
      Unit: "4.25",
    },
    {
      state: "Madhya Pradesh",
      lat: "23.473324",
      lon: "77.947998",
      ghi: "1900",
      zeroToHundred: "4.13",
      OhoToTh: "5.05",
      ThoToFh: "6.4",
      Above500: "8.73",
      Unit: "4.27",
    },
    {
      state: "Haryana",
      lat: "29.065773",
      lon: "76.040497",
      ghi: "1702",
      zeroToHundred: "3.6",
      OhoToTh: "4.75",
      ThoToFh: "5.55",
      Above500: "6.75",
      Unit: "3.91",
    },
    {
      state: "Maharashtra",
      lat: "19.601194",
      lon: "75.552979",
      ghi: "1931",
      zeroToHundred: "3.22",
      OhoToTh: "5.92",
      ThoToFh: "8.89",
      Above500: "10.47",
      Unit: "4.29",
    },
    {
      state: "Tripura",
      lat: "23.745127",
      lon: "91.746826",
      ghi: "1663",
      zeroToHundred: "3.6",
      OhoToTh: "4.75",
      ThoToFh: "5.55",
      Above500: "6.75",
      Unit: "3.73",
    },
    {
      state: "Kerala",
      lat: "10.850516",
      lon: "76.271080",
      ghi: "1974",
      zeroToHundred: "3.70",
      OhoToTh: "5.50",
      ThoToFh: "6.90",
      Above500: "7.90",
      Unit: "4.17",
    },
    {
      state: "Uttar Pradesh",
      lat: "28.207609",
      lon: "79.826660",
      ghi: "1720",
      zeroToHundred: "5.50",
      OhoToTh: "6.00",
      ThoToFh: "6.50",
      Above500: "7.00",
      Unit: "3.81",
    },
    {
      state: "Assam",
      lat: "26.244156",
      lon: "92.537842",
      ghi: "1617",
      zeroToHundred: "4.90",
      OhoToTh: "6.15",
      ThoToFh: "6.75",
      Above500: "7.15",
      Unit: "3.70",
    },
    {
      state: "Tamil Nadu",
      lat: "11.127123",
      lon: "78.656891",
      ghi: "1957",
      zeroToHundred: "2.9",
      OhoToTh: "3.50",
      ThoToFh: "4.60",
      Above500: "6.60",
      Unit: "4.18",
    },
    {
      state: "Karnataka",
      lat: "15.317277",
      lon: "75.713890",
      ghi: "1941",
      zeroToHundred: "4.10",
      OhoToTh: "5.55",
      ThoToFh: "7.10",
      Above500: "8.15",
      Unit: "4.22",
    },
    {
      state: "West Bengal",
      lat: "22.978624",
      lon: "87.747803",
      ghi: "1696",
      zeroToHundred: "5.26",
      OhoToTh: "5.86",
      ThoToFh: "6.98",
      Above500: "8.50",
      Unit: "3.73",
    },
    {
      state: "Gujarat",
      lat: "22.309425",
      lon: "72.136230",
      ghi: "2026",
      zeroToHundred: "3.1",
      OhoToTh: "3.75",
      ThoToFh: "4.90",
      Above500: "5.05",
      Unit: "4.53",
    },
    {
      state: "Odisha",
      lat: "20.940920",
      lon: "84.803467",
      ghi: "1795",
      zeroToHundred: "3.00",
      OhoToTh: "4.80",
      ThoToFh: "5.80",
      Above500: "6.20",
      Unit: "3.92",
    },
    {
      state: "Rajasthan",
      lat: "27.391277",
      lon: "73.432617",
      ghi: "1896",
      zeroToHundred: "6.50",
      OhoToTh: "7.35",
      ThoToFh: "7.65",
      Above500: "7.95",
      Unit: "4.33",
    },
    {
      state: "Uttarakhand",
      lat: "30.0668",
      lon: "79.0193°",
      ghi: "1783",
      zeroToHundred: "3.42",
      OhoToTh: "4.20",
      ThoToFh: "5.30",
      Above500: "6.64",
      Unit: "4.11",
    },
    {
      state: "Sikkim",
      lat: "27.5330",
      lon: "88.5122°",
      ghi: "1471",
      zeroToHundred: "2.00",
      OhoToTh: "3.00",
      ThoToFh: "3.50",
      Above500: "4.00",
      Unit: "3.40",
    },
    {
      state: "Punjab",
      lat: "31.1471",
      lon: "75.3412°",
      ghi: "1702",
      zeroToHundred: "3.49",
      OhoToTh: "5.84",
      ThoToFh: "7.30",
      Above500: "8.85",
      Unit: "3.91",
    },
    {
      state: "Puducherry",
      lat: "11.9416",
      lon: "79.8083°",
      ghi: "2017",
      zeroToHundred: "5.60",
      OhoToTh: "6.65",
      ThoToFh: "7.40",
      Above500: "8.64",
      Unit: "4.18",
    },
    {
      state: "NCT of Delhi",
      lat: "28.7041",
      lon: "77.1025°",
      ghi: "1711",
      zeroToHundred: "3.00",
      OhoToTh: "4.50",
      ThoToFh: "6.50",
      Above500: "7.00",
      Unit: "3.86",
    },
    {
      state: "Nagaland",
      lat: "26.1584",
      lon: "94.5624",
      ghi: "1484",
      zeroToHundred: "4.50",
      OhoToTh: "5.40",
      ThoToFh: "6.00",
      Above500: "7.00",
      Unit: "3.53",
    },
    {
      state: "Mizoram",
      lat: "23.1645",
      lon: "92.9376",
      ghi: "1730",
      zeroToHundred: "4.80",
      OhoToTh: "5.50",
      ThoToFh: "5.90",
      Above500: "6.55",
      Unit: "4.04",
    },
    {
      state: "Maghalaya",
      lat: "25.4670",
      lon: "91.3662",
      ghi: "1578",
      zeroToHundred: "3.65",
      OhoToTh: "4.00",
      ThoToFh: "4.40",
      Above500: "6.00",
      Unit: "3.74",
    },
    {
      state: "Manipur",
      lat: "24.6637",
      lon: "93.9063",
      ghi: "1716",
      zeroToHundred: "4.2",
      OhoToTh: "5.5",
      ThoToFh: "6.40",
      Above500: "7.64",
      Unit: "4.03",
    },
    {
      state: "Jharkhand",
      lat: "23.6102",
      lon: "85.2799",
      ghi: "1854",
      zeroToHundred: "3.14",
      OhoToTh: "4.64",
      ThoToFh: "6.50",
      Above500: "7.50",
      Unit: "4.19",
    },
    {
      state: "Jammu and Kashmir",
      lat: "33.2778",
      lon: "75.3412",
      ghi: "1738",
      zeroToHundred: "1.4",
      OhoToTh: "3.00",
      ThoToFh: "6.50",
      Above500: "7.00",
      Unit: "4.29",
    },
    {
      state: "Goa",
      lat: "15.2993",
      lon: "74.1240",
      ghi: "1950",
      zeroToHundred: "3.25",
      OhoToTh: "3.90",
      ThoToFh: "4.70",
      Above500: "5.75",
      Unit: "4.26",
    },
    {
      state: "Bihar",
      lat: "25.0961",
      lon: "85.3131",
      ghi: "1724",
      zeroToHundred: "6.10",
      OhoToTh: "6.95",
      ThoToFh: "8.05",
      Above500: "9.75",
      Unit: "3.80",
    },
    {
      state: "Chhattisgarh",
      lat: "21.2787",
      lon: "81.8661",
      ghi: "1883",
      zeroToHundred: "4.5",
      OhoToTh: "4.95",
      ThoToFh: "5.6",
      Above500: "6.5",
      Unit: "4.18",
    },
    {
      state: "Dadra And Nagar Haveli",
      lat: "20.1809",
      lon: "73.0169",
      ghi: "1920",
      zeroToHundred: "3.44",
      OhoToTh: "7.34",
      ThoToFh: "10.35",
      Above500: "11.82",
      Unit: "4.28",
    },
    {
      state: "Daman",
      lat: "20.3974",
      lon: "72.8328",
      ghi: "1964",
      zeroToHundred: "1.4",
      OhoToTh: "3.00",
      ThoToFh: "6.50",
      Above500: "7.00",
      Unit: "4.42",
    },
    {
      state: "Andaman and Nicobar",
      lat: "11.7401",
      lon: "92.6586",
      ghi: "1828",
      zeroToHundred: "2.05",
      OhoToTh: "2.05",
      ThoToFh: "7.2",
      Above500: "7.5",
      Unit: "3.94",
    },
    {
      state: "Anurachal Pradesh",
      lat: "28.2180",
      lon: "94.7278",
      ghi: "1428",
      zeroToHundred: "2.65",
      OhoToTh: "4.30",
      ThoToFh: "6.50",
      Above500: "7.75",
      Unit: "3.38",
    },
  ];
  const [statename, setStatename] = useState(JSON.stringify(stateData[0]));
  const [category, setCategory] = useState("Residential");
  const [tempData, setTempData] = useState(null);
  const [cost, setcost] = useState(0);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [bulb, setbulb] = useState("5");
  const [bulbcount, setbulbcount] = useState(0);
  const [celfan, setcelfan] = useState("50");
  const [celfancount, setcelfancount] = useState(0);
  const [tv, settv] = useState("150");
  const [tvcount, settvcount] = useState(0);
  const [ac, setac] = useState("1000");
  const [account, setaccount] = useState(0);
  const [wm, setwm] = useState("700");
  const [wmcount, setwmcount] = useState(0);
  const [waterpump, setwaterpump] = useState("0.5");
  const [waterpumpcount, setwaterpumpcount] = useState(0);
  const [geyser, setgeyser] = useState("800");
  const [geysercount, setgeysercount] = useState(0);
  const [showCards, setshowCards] = useState(false);
  const [totalLoadValue, setTotalLoadValue] = useState(0);
  const [showCardsText, setshowCardsText] = useState("Show Dashboard");
  const toggleCards = (e) => {
    e.preventDefault();
    if (showCards === true) {
      setshowCards(false);
      setshowCardsText("Show Dashboard");
    } else {
      setshowCards(true);
      setshowCardsText("Hide Dashboard");
    }
  };
  var totalLoad =
    geyser * geysercount +
    waterpump * waterpumpcount * 746 +
    wm * wmcount +
    ac * account +
    tv * tvcount +
    celfancount * celfan +
    bulbcount * bulb +
    totalLoadValue * 1000;

  const sizeOfPowerPlant = totalLoad;
  const monthlyElectricityGeneration =
    (totalLoad * JSON.parse(statename).Unit * 30) / 1000;
  const annualElectricityGeneration =
    (totalLoad * JSON.parse(statename).Unit * 365) / 1000;
  const monthlyTerrif = monthlyElectricityGeneration * cost;
  const annualTerrif = annualElectricityGeneration * cost;
  const lifeTimeTerrif = annualElectricityGeneration * cost * 25;
  const costOfPlant = totalLoad * 60;
  const costOfPlantwithS = totalLoad * 60 * 0.7;
  const PaybackPeriod = (costOfPlantwithS)/(annualTerrif)

  const casdValues = [
    ["Feasible Plant Capacity", Math.round(sizeOfPowerPlant) / 1000 + " kW"],
    ["Cost of Plant With subsidy", Math.round(costOfPlantwithS) + " ₹"],
    ["Payback Period", Math.round(PaybackPeriod) + " Year"],
    ["Cost of Plant Without subsidy", Math.round(costOfPlant) + " ₹"],
    ["Monthly Electricity Generation", Math.round(monthlyElectricityGeneration) + " Unit"],
    ["Annual Electricity Generation", Math.round(annualElectricityGeneration) + " Unit"],
    ["Annual Tarrif", Math.round(annualTerrif) + " ₹"],
    ["Life Time Tarrif", Math.round(lifeTimeTerrif*100)/100 + " ₹"],
    

    
    
  ];
  const handleClose = () => {
    setShow(false);
    setTempData(null);
  };
  const handleShow = () => setShow(true);
  const showPopup = (e) => {
    e.preventDefault();
    if (cost > 0) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${JSON.parse(statename).lat
          }&lon=${JSON.parse(statename).lon
          }&appid=57b0455c3ac9fcc2991aed2d12e53998`
        )
        .then((res) => {
          setTempData(res.data);
        });
      handleShow();
    } else {
      setError("Please enter valid cost");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };
  return (
    <div className="container">
      <div className="row mt-4 d-flex justify-content-center mb-5">
        <div className="col-8">
          <div className="card px-3 py-4 form-card">
            <h2 className="text-center">ENTER BELOW DETAILS</h2>
            <form>
              <div className="my-3">
                <Accordion>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Appliances Load</Accordion.Header>
                    <Accordion.Body>
                      <Table responsive="sm" size="sm" striped bordered hover>
                        <thead>
                          <tr>
                            <th>Appliances</th>
                            <th>Units/W</th>
                            <th>X</th>
                            <th>Count</th>
                            <th>=</th>
                            <th>Load</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Bulb</td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                onChange={(e) => setbulb(e.target.value)}
                              >
                                <option value="5">5W</option>
                                <option value="7">7W</option>
                                <option value="9">9W</option>
                                <option value="12">12W</option>
                                <option value="20">20W</option>
                              </select>
                            </td>
                            <td className="text-center">X</td>
                            <td>
                              <input
                                type="number"
                                value={bulbcount}
                                className="form-control form-control-sm"
                                onChange={(e) => setbulbcount(e.target.value)}
                              />
                            </td>
                            <td className="text-center">=</td>
                            <td>
                              <b>{bulbcount * bulb}</b> W
                            </td>
                          </tr>
                          <tr>
                            <td>Ceiling Fan</td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                onChange={(e) => setcelfan(e.target.value)}
                              >
                                <option value="50">50W</option>
                                <option value="55">55W</option>
                                <option value="60">60W</option>
                                <option value="70">70W</option>
                              </select>
                            </td>
                            <td className="text-center">X</td>
                            <td>
                              <input
                                type="number"
                                value={celfancount}
                                className="form-control form-control-sm"
                                onChange={(e) => setcelfancount(e.target.value)}
                              />
                            </td>
                            <td className="text-center">=</td>
                            <td>
                              <b>{celfancount * celfan}</b> W
                            </td>
                          </tr>
                          <tr>
                            <td>Television</td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                onChange={(e) => settv(e.target.value)}
                              >
                                <option value="150">150W</option>
                                <option value="200">200W</option>
                                <option value="250">250W</option>
                              </select>
                            </td>
                            <td className="text-center">X</td>
                            <td>
                              <input
                                type="number"
                                value={tvcount}
                                className="form-control form-control-sm"
                                onChange={(e) => settvcount(e.target.value)}
                              />
                            </td>
                            <td className="text-center">=</td>
                            <td>
                              <b>{tv * tvcount}</b> W
                            </td>
                          </tr>
                          <tr>
                            <td>Air Conditioner</td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                onChange={(e) => setac(e.target.value)}
                              >
                                <option value="1000">1 TON</option>
                                <option value="1500">1.5 TON</option>
                                <option value="2000">2 TON</option>
                              </select>
                            </td>
                            <td className="text-center">X</td>
                            <td>
                              <input
                                type="number"
                                value={account}
                                className="form-control form-control-sm"
                                onChange={(e) => setaccount(e.target.value)}
                              />
                            </td>
                            <td className="text-center">=</td>
                            <td>
                              <b>{ac * account}</b> W
                            </td>
                          </tr>
                          <tr>
                            <td>Washing Machine</td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                onChange={(e) => setwm(e.target.value)}
                              >
                                <option value="700">700W</option>
                                <option value="800">800W</option>
                              </select>
                            </td>
                            <td className="text-center">X</td>
                            <td>
                              <input
                                type="number"
                                value={wmcount}
                                className="form-control form-control-sm"
                                onChange={(e) => setwmcount(e.target.value)}
                              />
                            </td>
                            <td className="text-center">=</td>
                            <td>
                              <b>{wm * wmcount}</b> W
                            </td>
                          </tr>
                          <tr>
                            <td>Water Pump</td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                onChange={(e) => setwaterpump(e.target.value)}
                              >
                                <option value="0.5">0.5H.P</option>
                                <option value="1">1H.P</option>
                                <option value="2">2H.P</option>
                                <option value="5">5H.P</option>
                              </select>
                            </td>
                            <td className="text-center">X</td>
                            <td>
                              <input
                                type="number"
                                value={waterpumpcount}
                                className="form-control form-control-sm"
                                onChange={(e) =>
                                  setwaterpumpcount(e.target.value)
                                }
                              />
                            </td>
                            <td className="text-center">=</td>
                            <td>
                              <b>{waterpump * waterpumpcount * 746}</b> W
                            </td>
                          </tr>
                          <tr>
                            <td>Geyser</td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                onChange={(e) => setgeyser(e.target.value)}
                              >
                                <option value="800">800W</option>
                                <option value="1000">1000W</option>
                                <option value="1500">1500W</option>
                                <option value="2000">2000W</option>
                                <option value="3000">3000W</option>
                              </select>
                            </td>
                            <td className="text-center">X</td>
                            <td>
                              <input
                                type="number"
                                value={geysercount}
                                className="form-control form-control-sm"
                                onChange={(e) => setgeysercount(e.target.value)}
                              />
                            </td>
                            <td className="text-center">=</td>
                            <td>
                              <b>{geyser * geysercount}</b> W
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <span className="ms-2">
                  Total Appliances Load : <b>{totalLoad}</b>W (
                  <b>{(Math.round(totalLoad) / 1000).toFixed(2)}</b>kW)
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="totalapplload" className="form-label">
                  Set Appliance Load
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="totalapplload"
                    value={totalLoadValue}
                    onChange={(e) => setTotalLoadValue(e.target.value)}
                    required
                  />
                  <span className="input-group-text" id="basic-addon2">
                    kW
                  </span>
                </div>
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
              <div className="text-center state-price mb-3">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Electricity Cost</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Range</th>
                            <th>Price/unit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>0 - 100</td>
                            <td>{JSON.parse(statename).zeroToHundred} ₹</td>
                          </tr>
                          <tr>
                            <td>101 - 200</td>
                            <td>{JSON.parse(statename).OhoToTh} ₹</td>
                          </tr>
                          <tr>
                            <td>201 - 500</td>
                            <td>{JSON.parse(statename).ThoToFh} ₹</td>
                          </tr>
                          <tr>
                            <td>Above 500</td>
                            <td>{JSON.parse(statename).Above500} ₹</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="mb-3">
                <label htmlFor="selectcategory" className="form-label">
                  Select Customer Category
                </label>
                <select
                  className="form-select"
                  aria-label="Select Customer category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Residential">Residential</option>
                  <option value="Industrial">Industrial</option>
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
              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  onClick={showPopup}
                  className="btn btn-primary"
                >
                  Submit
                </button>
                <button onClick={toggleCards} className="btn btn-primary">
                  {showCardsText}
                </button>
              </div>
              <div className="text-center my-3 text-danger">{error}</div>
            </form>
          </div>
        </div>
      </div>
      {showCards && <Card title={casdValues} />}
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
              <li>
                Appliance Load : {(Math.round(totalLoad) / 1000).toFixed(2)} kW
              </li>
              <li>State : {JSON.parse(statename).state}</li>
              <li>GHI : {JSON.parse(statename).ghi} W/sq.m</li>
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
              <Spinner animation="grow" variant="danger" />
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
