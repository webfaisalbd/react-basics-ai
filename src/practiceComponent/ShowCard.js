import React from 'react'

const showCard = (props) => {
    const {title, desc} = props;
  return (
    <div style={{"border": "2px solid blue", "margin": '10px'}}>
        <h1>{title}</h1>
        <h4>{desc}</h4>
    </div>
  )
}

export default showCard