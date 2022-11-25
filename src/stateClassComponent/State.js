import React, { Component } from "react";
import './style.css';

class State extends Component {


    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {




        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <div style={{display: "flex", gap: "10px"}}>
                    <button onClick={this.handleIncrement}>+</button>
                    <button onClick={this.handleDecrement} disabled={this.state.count<1 ? true : false}>-</button>
                </div>
            </>
        )
    }
}

export default State;