import React, { useState } from 'react'

const NewTodo = (props) => {

    const [todo, setTodo] = useState('');

    const handleInputChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(todo);

        props.onHandleTodo(todo);
    }

    return (
        <>
            <p>I am new todo</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo:  </label>
                <input type="text" name="todo" id="todo"
                onChange={handleInputChange} value={todo} />
                <button>Add Todo</button>
            </form>
        </>
    )
}

export default NewTodo