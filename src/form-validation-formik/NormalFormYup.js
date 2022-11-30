import React from 'react'

import * as yup from 'yup';

const NormalFormYup = () => {

    const inputStyle = {
        padding: "5px",
        margin: "5px"
    }

    let userSchema = yup.object().shape({
        name: yup.string().min(2).required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).max(6).required()
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
        }
        console.log(formData);

        const isValid = await userSchema.isValid(formData);
        console.log(isValid);
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input style={inputStyle} type="text" name="name" placeholder='Enter name...' />
                <br />
                <input style={inputStyle} type="email" name="email" placeholder='Enter email...' />
                <br />
                <input style={inputStyle} type="password" name="password" placeholder='Enter password...' />
                <br />
                <input style={inputStyle} type="submit" />
            </form>
        </>
    )
}

export default NormalFormYup