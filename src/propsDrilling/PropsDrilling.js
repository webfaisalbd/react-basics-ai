import React from 'react'
import { useState } from 'react'
import Component1 from './Component1'



const PropsDrilling = () => {
    const [user, setUser] = useState({id: 1, name: 'Faisal'})
  return (
    <>
        <h2>Props Drilling</h2>
        <Component1 value={user} />
    </>
  )
}

export default PropsDrilling