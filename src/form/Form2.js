import React, { useState } from 'react'
import style from './form.module.css'

const Form2 = () => {

    const [user, setUser] = useState({ name: '', email: '', password: '', color: '' });

    const { name, email, password, color } = user;

    const handleChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

        // const filledName = e.target.name;
        // if(filledName === "name"){
        //     setUser({name: e.target.value, email, password});
        // }
        // if(filledName === "email"){
        //     setUser({name, email: e.target.value, password});
        // }
        // if(filledName === "password"){
        //     setUser({name, email, password: e.target.value});
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        console.log(user.name);
    }


    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required onChange={handleChange}
                        value={name} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" required onChange={handleChange}
                        value={email} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required onChange={handleChange}
                        value={password} />
                </div>
                <div className={style.formGroup}>
                    <select value={color}
                        onChange={handleChange}
                    >
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>

                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>

            </form>
        </div>
    )
}

export default Form2