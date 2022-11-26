import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1 
        })
    }

    render() {
        const {count} = this.state;
        return (
            <>
                <h2>{count}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </>
        )
    }
}

export default ClassComponent;