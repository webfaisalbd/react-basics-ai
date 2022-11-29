import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    return (
        <>
            {props.data.map((singleData, index) => (
                <Todo singleData={singleData} key={index} />
            ))}
        </>
    )
}

export default Todos