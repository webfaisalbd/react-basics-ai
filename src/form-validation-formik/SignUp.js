import React, { useState } from 'react'

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
        const newUser = {
          name,
          email,
          password
        }
        console.log(newUser)
    }

  return (
    <>
    <h2>User Signup: </h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name"
             onChange={handleNameChange} value={name} />
            </div>
            <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email"
             onChange={handleEmailChange} value={email} />
            </div>
            <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password"
             onChange={handlePasswordChange} value={password} />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    </>
  )
}

export default SignUp