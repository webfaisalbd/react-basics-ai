import React from 'react'
import { useRef } from 'react';

const UserForm = () => {

    const userNameRef = useRef();
    const userPasswordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = userNameRef.current.value;
        const password = userPasswordRef.current.value;
        console.log({ userName, password });

        userNameRef.current.style.color = "blue";
    }
    return (
        <>
            <h3>User Form:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" ref={userNameRef} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" ref={userPasswordRef} />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default UserForm