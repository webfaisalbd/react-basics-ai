import  { useState } from "react";

function UseStateHook(){

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }

    // function handleIncrement2() {
    //     setCount(count+1);
    // }

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default UseStateHook;