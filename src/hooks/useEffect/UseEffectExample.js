import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // calls with every render
    // useEffect(()=> {
    //     console.log("use Effect");
    // })


    // calls with only first render
    // useEffect(()=> {
    //     console.log("use Effect");
    // }, [])


    // calls with first render and depend on count variable/state
    useEffect(() => {
        console.log("use Effect");
    }, [count])


    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    return (
        <div>
            {console.log("rendering")}
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => { setIsLoading(!isLoading) }}>Loading...</button>
        </div>
    )
}

export default UseEffectExample