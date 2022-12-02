import React from 'react'

// import DataFetch from './hooks/useEffect/DataFetch'
// import ErrorDataFetch from './hooks/useEffect/ErrorDataFetch'
import DataFetch from './customHooks/DataFetch'

const App = () => {
  return (
    <>
      {/* <DataFetch /> */}
      {/* <ErrorDataFetch /> */}
      <DataFetch />
    </>
  )
}

export default App