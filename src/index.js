import React from 'react'
import ReactDOM from 'react-dom/client';

function CardComponent() {
  return (
    <div className="mainCard">
      <div className='card'>
        <h2>My ID Card</h2>
        <div className="cardTitle">Faisal</div>
        <div className="cardDesignation">Web Developer</div>
        <div className="bloodGroup">AB+</div>
        <div className="email">web.faisal.bd@gmail.com</div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="rowCard">
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  </>
);