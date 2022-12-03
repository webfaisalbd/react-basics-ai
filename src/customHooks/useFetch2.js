import React, { useEffect, useState } from 'react'

const useFetch2 = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("fetching problem....")
                }
                else {
                    return res.json();
                }
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError(null)
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message)
            })
    }, [url])

    return { data, error, loading };
}

export default useFetch2