import React, { useState } from 'react'

const NewTodo = (props) => {

    const [todo, setTodo] = useState('');

    const typeTodo = (e) => {
        setTodo(e.target.value);        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        props.onNewTodo(todo); 
        

    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={typeTodo} value={todo} />
            <button type='submit'>Enter</button>
        </form>
    </>
  )
}

export default NewTodo