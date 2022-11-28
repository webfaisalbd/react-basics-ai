import React, {Component} from 'react'

class FormClass extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            color: ''
        }
    }

    handleChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    // handleName = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    // handleEmail = (e) => {
    //     this.setState({
    //         email: e.target.value
    //     })
    // }

    // handlePassword = (e) => {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }

    // handleColor = (e) => {
    //     this.setState({
    //         color: e.target.value
    //     })
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.name, this.state.email, this.state.password, this.state.color);
        console.log(this.state);
        
        this.setState({
            name: '',
            email: '',
            password: '',
            color: ''
        })
    }

    render(){
        return (
            <>
                <h2>Hello Class</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" required
                        // onChange={this.handleName}
                        onChange={this.handleChange}
                        value={this.state.name} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required
                        // onChange={this.handleEmail}
                        onChange={this.handleChange}
                        value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" required
                        // onChange={this.handlePassword}
                        onChange={this.handleChange}
                        value={this.state.password} />
                    </div>
                    <div>
                        <select value={this.state.color} 
                        // onChange={this.handleColor}
                        onChange={this.handleChange}
                        >
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                        </select>
                        
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </>
        )
    }
}
export default FormClass;