import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => {
                    if (!res.ok) {
                        throw Error("Fetching is not successful")
                    }
                    else {
                        return res.json()
                    }
                })
                .then(data => {
                    setTodos(data)
                    setIsLoading(false);
                    setError(null)
                })
                .catch((error) => {
                    setError(error.message);
                    setIsLoading(false);
                })
        }, 2000);
    }, [])


    const todosElement = todos && todos.map((todo) => {
        return <div>
            <p key={todo.id}> {todo.title}</p>
        </div>
    })

    const loadingMessage = <p>Todos is Loading...</p>

    return (
        <div>
            {console.log(todos)}
            {error && <p>{error}</p>}
            {isLoading && loadingMessage}
            {todosElement}
        </div>
    );
};

export default DataFetch