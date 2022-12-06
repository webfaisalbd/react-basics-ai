import React from 'react'
import Component2 from './Component2'

const Component1 = ({value}) => {
  return (
    <>
        <Component2 output={value} />
    </>
  )
}

export default Component1