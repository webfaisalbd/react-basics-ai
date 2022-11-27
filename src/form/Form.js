import React from 'react'
import style from './form.module.css'

const Form = () => {

    const handleName = (e) => {
        console.log(e.target.value);
    }
    const handleEmail = (e) => {
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello");
    }


    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required onChange={handleName} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" required onChange={handleEmail} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required onChange={handlePassword} />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>

            </form>
        </div>
    )
}

export default Form