import React, { useEffect, useState } from 'react'

const DataFetch2 = () => {
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [])

    return (
        <>
            <h2>Galary</h2>
            {
               albums && albums.map((album) => {
                    return <div key={album.id}>
                        <h2>{album.title}</h2>
                        <img style={{width:"300px"}} src={album.image} alt="" />
                    </div>
                })
            }
        </>

    )
}

export default DataFetch2