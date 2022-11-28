import React, { useState } from 'react'
import style from './form.module.css'

const Form3 = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,password);
    }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" required
                onChange={handleName} />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" required
                onChange={handleEmail} />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" required
                onChange={handlePassword} />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Form3