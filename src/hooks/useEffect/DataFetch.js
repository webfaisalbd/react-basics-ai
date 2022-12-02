import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data)
            })
    }, [])

    return (
        <div>
            {console.log(todos)}
            {
                todos && todos.map((todo) => {
                    return <div style={{border: "2px solid blue", margin: "5px"}}>
                        <h2 key={todo.id}> {todo.title}</h2>
                    </div>
                })
            }
        </div>
    );
};

export default DataFetch