import React, { useEffect, useState } from 'react'

const UseEffectExample2 = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("Use Effect...")
    }, [count])

    return (
        <div>
            {console.log("rendering.....")}
            <h4>Count: {count}</h4>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => setIsLoading(!isLoading)}>Loading.....</button>
        </div>
    )
}

export default UseEffectExample2