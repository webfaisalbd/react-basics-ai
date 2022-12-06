import React from 'react'

const Component2 = ({output}) => {
    const {name, id} = output;
  return (
    <div>
        <p>Id: {id} and Name: {name}</p>
    </div>
  )
}

export default Component2