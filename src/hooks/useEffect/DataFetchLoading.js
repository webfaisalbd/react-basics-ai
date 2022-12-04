import React, { useEffect, useState } from 'react'

const DataFetchLoading = () => {
    const [albums, setAlbums] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if(!res.ok){
                    throw Error("fetching is not successful");
                }
                else {
                    return res.json()
                }
            })
            .then(data => {
                setAlbums(data)
                setError(false);
            })
            .catch((err)=> {
                setError(err.message);
            })
    }, [])

    return (
        <>
            <h2>Galary</h2>
            {error && <p>{error}</p> }
            {
                albums && albums.map((album) => (
                    <div key={album.id}>
                        <h2>{album.title}</h2>
                        <img style={{ width: "300px" }} src={album.image} alt="" />
                    </div>
                ))
            }
        </>
    )
}
export default DataFetchLoading