import React from 'react'

import { useFormik } from 'formik';

const SignUpFormik2 = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values);

            resetForm({
                name: '',
                email: ''
            })
        }
    })

    return (
        <>
            <h2>Sign Up Form: </h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"
                        onChange={formik.handleChange}
                        value={formik.values.name} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default SignUpFormik2