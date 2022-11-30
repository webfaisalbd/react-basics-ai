import React, { useState } from 'react'

import * as yup from 'yup';

const NormalFormYup2 = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;

    let userSchema = yup.object().shape({
        name: yup.string().min(2).required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).max(6).required()
    })

    const handleChange = (e) => {

        let filledName = e.target.name;

        if (filledName === 'name') {
            setUser({ name: e.target.value, email, password })
        }
        if (filledName === 'email') {
            setUser({ name, email: e.target.value, password })
        }
        if (filledName === 'password') {
            setUser({ name, email, password: e.target.value })
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);

        const isValid = await userSchema.isValid(user);
        console.log(isValid);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required
                        onChange={handleChange}
                        value={name} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" required
                        onChange={handleChange}
                        value={email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required
                        onChange={handleChange}
                        value={password} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default NormalFormYup2