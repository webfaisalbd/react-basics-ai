import React from 'react'

// import DataFetch from './hooks/useEffect/DataFetch'
// import ErrorDataFetch from './hooks/useEffect/ErrorDataFetch'
import DataFetch from './customHooks/DataFetch'
import DataFetch2 from './customHooks/DataFetch2'

const App = () => {
  return (
    <>
      {/* <DataFetch /> */}
      {/* <ErrorDataFetch /> */}
      {/* <DataFetch /> */}
      
      <DataFetch2 />
    </>
  )
}

export default App