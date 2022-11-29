import React from 'react'
import Child from './stateLifting/Child';

const App = () => {

  const data = "I am from Parent (App)";

  const handleChildData = (childData) => {
    console.log(childData)
  }

  return (
    <>
        <Child data={data} onChildData={handleChildData} />
    </>
  )
}

export default App;