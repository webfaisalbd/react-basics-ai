import React from 'react'

const Child = ({data, onHandleChild}) => {
    const childData = "I am from child data";

    onHandleChild(childData);

    return (
        <div>
            <p>I am Child: {data}</p>
        </div>
    )
}

export default Child;