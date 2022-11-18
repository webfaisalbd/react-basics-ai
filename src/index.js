import React from 'react'
import ReactDOM from 'react-dom/client';

let name = "Faisal Ahmed";
let age = "26";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Hello {name}</h1>
    <p>Age: {age}</p>
  </>
);