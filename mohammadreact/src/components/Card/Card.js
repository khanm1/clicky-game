import React from "react";
import "./Card.css";


function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>

        </ul>
      </div>
      <span onClick={() => props.clickCount(props.id)} className="remove">
        <h3> Click Here</h3>
      </span>
    </div>
  );
}

export default Card;


