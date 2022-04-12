import React from "react";
import CardItem from "./CardItem";

export default function Card(props) {
  return (
    <div>
      <div className="container text-center d-flex justify-content-center mb-5 bg-card px-2 py-2">
        <div className="card-flex">
          {props.title.map((item, index) => {
            return <CardItem key={index} title={item[0]} value={item[1]}/>;
          })}
        </div>
      </div>
    </div>
  );
}
