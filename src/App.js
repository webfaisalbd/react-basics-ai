import React from 'react'

import DataFetch from './hooks/useEffect/DataFetch'
import ErrorDataFetch from './hooks/useEffect/ErrorDataFetch'

const App = () => {
  return (
    <>
      {/* <DataFetch /> */}
      <ErrorDataFetch />
    </>
  )
}

export default App