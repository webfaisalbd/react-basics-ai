import React from 'react'
import ReactDOM from 'react-dom/client';

let name = "Faisal Ahmed";
let age = "26";

let nameColor = {
  color: "lightblue"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 style={nameColor}>Hello {name}</h1>
    <p style={{color: "lightseagreen", fontSize: "20px", fontWeight: 700}}>Age: {age}</p>
  </>
);