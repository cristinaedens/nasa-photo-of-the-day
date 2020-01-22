import React from "react";

function Card (props) {
  return(
    <div className="card">
      <h1>{props.data.title}</h1>
      <img alt={props.data.title} src= {props.data.hdurl} />
      <h3>{props.data.date}</h3>
      <p>{props.data.explanation}</p>
  <p>{props.data.copyright}</p>
    </div>
  )
}

export default Card;