import React from 'react'
import ReactDOM from 'react-dom/client';

let name = "Faisal Ahmed";
let age = "26";

let nameColor = {
  color: "lightblue"
}

const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 style={nameColor}>Hello {name}</h1>
    <p style={{color: "lightseagreen", fontSize: "20px", fontWeight: 700}}>Age: {age}</p>
    <p style={{fontSize: "20px", fontWeight: 700, color: "lightsalmon"}}>{day + "/" + month + "/" + year}</p>
  </>
);