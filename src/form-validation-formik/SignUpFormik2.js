import React, { useState } from 'react'

const SignUpFormik2 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newUser = {
            name,
            email
        }
        console.log(newUser);
    }
    return (
        <>
            <h2>Sign Up Form: </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"
                    onChange={handleNameChange}
                    value={name} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"
                    onChange={handleEmailChange}
                    value={email} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default SignUpFormik2