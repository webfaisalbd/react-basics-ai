import React, { useState } from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

const demoTodo = ["one", "two"];

const Home = () => {

    const [todo, setTodo] = useState(demoTodo);

    const handleTodo = (newTodo) => {
        setTodo([...todo, newTodo]);
    }

    return (
        <>
            <div style={{ width: "300px", margin: '20px auto', border: "2px solid lightblue", padding: "10px" }}>
                <NewTodo onNewTodo={handleTodo} />
                <Todos data={todo} />
            </div>
        </>
    )
}
export default Home