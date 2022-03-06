import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function FormComponent() {
    const states = ["Andhra Pradesh",
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
        "Puducherry"];
    const [capacity, setCapacity] = useState(1)
    const [statename, setStatename] = useState("Andhra Pradesh")
    const [category, setCategory] = useState("Residential")
    const [cost, setcost] = useState(0)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const showPopup = (e) => {
        e.preventDefault();
        handleShow()
    }
    return (
        <div className='container'>
            <div className="row mt-4 d-flex justify-content-center">
                <div className="col-6">
                    <div className="card px-3 py-4">
                        <h2 className="text-center">
                            ENTER BELOW DETAILS
                        </h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="capacity" className="form-label">Solar panel capacity wants to install (1 - 1000)kW</label>
                                <div>{capacity} kW</div><input type="range" className="form-range" id="capacity" min="1" max="1000"
                                    onChange={e => setCapacity(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectstate" className="form-label">Select State</label>
                                <select className="form-select" aria-label="Default select example" onChange={e => setStatename(e.target.value)}>
                                    {states.map((state, index) => {
                                        return (
                                            <option value={state} key={index}>{state}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectcategory" className="form-label">Select State</label>
                                <select className="form-select" aria-label="Select Customer category" onChange={e => setCategory(e.target.value)}>
                                    <option value="Residential">Residential</option>
                                    <option value="Industerial">Industerial</option>
                                    <option value="Institutional">Institutional</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Government">Government</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="electricitycost" class="form-label">Average Electricity Cost</label>
                                <div class="input-group mb-3">
                                    <input type="number" class="form-control" id='electricitycost' aria-label="Recipient's username" aria-describedby="basic-addon2" value={cost} onChange={e => setcost(e.target.value)} required/>
                                    <span class="input-group-text" id="basic-addon2">Rs. / Unit</span>
                                </div>
                            </div>
                            <button type='submit' onClick={showPopup} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Solar Rooftop Calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>{capacity}</li>
                        <li>{statename}</li>
                        <li>{category}</li>
                        <li>{cost}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
