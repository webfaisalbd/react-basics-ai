import React, { useState } from 'react'

import Todos from './Todos';
import NewTodo from './NewTodo';

const demoTodos = ["todo1", "todo2"];

const Home = () => {

    const [todo, setTodo] = useState(demoTodos);

    const handleTodo = (newTodo) => {
        setTodo([...todo, newTodo]);
    }

    return (
        <>
            <NewTodo onHandleTodo={handleTodo}  />
            <Todos todos={todo} />
        </>
    )
}

export default Home