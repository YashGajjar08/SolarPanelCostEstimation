import React from "react";

export default function CardItem(props) {
  return (
    <div>
      <div className="card my-1 mx-1 custom-card">
        <div className="card-body shadow">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="card-text fw-bold">
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
}
