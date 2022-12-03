import React from 'react'
import useFetch2 from './useFetch2'

const DataFetch2 = () => {
    const { data, error, loading } = useFetch2('https://jsonplaceholder.typicode.com/comments');
    return (
        <>
            <h2>DataFetch2</h2>
            {error && <p>{error}</p>}
            {loading && <p>loading........</p>}
            {
                data && data.map((d) => (
                    <div style={{border: "2px solid blue", margin: "5px"}} key={d.id}>
                        <p>name: {d.name}</p>
                        <p>email: {d.email}</p>
                    </div>
                ))
            }
        </>

    )
}

export default DataFetch2