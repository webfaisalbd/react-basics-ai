import React from 'react';

import { useFormik } from 'formik';

const SignUpFormik = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: '' })
        }
    })

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formik.values.name);
    // }


    return (
        <>
            <h2>User SignUp using Formik: </h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"
                        onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"
                        onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password"
                        onChange={formik.handleChange} value={formik.values.password} />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}

export default SignUpFormik;