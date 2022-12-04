import React, { Component, createRef } from 'react';

class UserForm extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.userNameRef = createRef();
        this.userPasswordRef = createRef();

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.userNameRef.current.value);
        console.log(this.userPasswordRef.current.value);

        this.userNameRef.current.style.color = "blue";
    }

    render() {
        return (
            <>
                <h2>User Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" ref={this.userNameRef} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" ref={this.userPasswordRef} />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </>
        );
    }
}

export default UserForm;