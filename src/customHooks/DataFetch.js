import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

const DataFetch = () => {

    const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/todos")

    const todosElement = data && data.map((todo) => {
        return <div>
            <p key={todo.id}> {todo.title}</p>
        </div>
    })

    const loadingMessage = <p>Todos is Loading...</p>
    const errorMessage = <p>{error}</p>

    return (
        <div>
            
            {error && errorMessage}
            {isLoading && loadingMessage}
            {todosElement}
        </div>
    );
};

export default DataFetch