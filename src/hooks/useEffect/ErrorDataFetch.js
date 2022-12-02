import React, { useEffect, useState } from 'react'

const ErrorDataFetch = () => {
    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.covid19api.com/summary')
                .then(res => {
                    if (!res.ok) {
                        throw Error("fetching problem....");
                    }
                    else {
                        return res.json()
                    }
                })
                .then(data => {
                    setDatas(data.Countries)
                    setLoading(false)
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false)
                })
        }, 2000);
    }, [])



    return (
        <>
            {error && <p>{error}</p> }
            {loading && <p>Loading..........</p>}
            {
                datas && datas.map((data) => (
                    <p key={data.ID}>{data.Country}</p>
                ))
            }
        </>
    )
}

export default ErrorDataFetch