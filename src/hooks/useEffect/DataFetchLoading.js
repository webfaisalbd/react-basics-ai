import React, { useEffect, useState } from 'react'

const DataFetchLoading = () => {
    const [albums, setAlbums] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setAlbums(data)
                setLoading(false);
            })
    }, [])

    return (
        <>
            <h2>Galary</h2>
            {loading && <p>Loading..........</p> }
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