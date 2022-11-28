import React, { useState } from 'react'
import style from './form.module.css'

const Form3 = () => {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;

    const handleChange = (e) => {

        // let filledName = e.target.name;

        // if (filledName === 'name') {
        //     setUser({ name: e.target.value, email, password })
        // }
        // if (filledName === 'email') {
        //     setUser({ name, email: e.target.value, password })
        // }
        // if (filledName === 'password') {
        //     setUser({ name, email, password: e.target.value })
        // }

        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // const handleName = (e) => {
    //     setName(e.target.value);
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    // const handlePassword = (e) => {
    //     setPassword(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required
                        // onChange={handleName}
                        onChange={handleChange}
                        value={name} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" required
                        // onChange={handleEmail} 
                        onChange={handleChange}
                        value={email} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required
                        // onChange={handlePassword} 
                        onChange={handleChange}
                        value={password} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Form3