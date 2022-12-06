import React, { Component } from 'react'

class LifeCycle extends Component {

    constructor(props) {
      super(props)

      console.log("constructor");
    
      this.state = {
        count : 0
      }
    
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
          })
      }

    render() {
        console.log("render");
        return (
            <>
                <h3>count {this.state.count}</h3>
                <button onClick={this.handleIncrement}>+</button>
            </>
        )
    }
}
export default LifeCycle;