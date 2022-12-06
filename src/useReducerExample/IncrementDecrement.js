import React, { useReducer } from 'react'

const reducer = (state, action) => {
    // action.type     action.payload 
    if (action.type === "INCREMENT") {
        return {
            count: state.count + 1
        }
    }
    if (action.type === "DECREMENT") {
        return {
            count: state.count - 1
        }
    }

    return state;
}

const IncrementDecrement = () => {

    const [myCounter, dispatch] = useReducer(reducer, {
        count: 0
    })

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return (
        <>
            <h2>Count: {myCounter.count} </h2>
            <div style={{ display: "flex", gap: "10px", margin: "10px", padding: "10px" }}>

                <button onClick={() => dispatch({ type: 'INCREMENT' })}>PLUS</button>
                <button onClick={() => handleDecrement()}>MINUS</button>

            </div>
        </>
    )
}

export default IncrementDecrement