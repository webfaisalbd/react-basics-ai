import React from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup';

const SignUpFormik2 = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Name must have at least 2 character").required(),
            email: yup.string().email().required(),

        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);

            resetForm({
                name: '',
                email: ''
            })
        }
    })

    // console.error(formik.errors);
    const nameError = formik.touched.name && formik.errors.name &&
        <span style={{ color: "red" }}>{formik.errors.name}</span>

    const emailError = formik.touched.email && formik.errors.email &&
        <span style={{ color: "red" }}>{formik.errors.email}</span>

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
                {nameError}
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                </div>
                {emailError}

                <br />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default SignUpFormik2