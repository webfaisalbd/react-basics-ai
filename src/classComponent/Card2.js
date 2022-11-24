import React, {Component} from 'react';

class Card2 extends Component{

    render() {
        return (
            <div>
                <h1>Hello from Class Component</h1>
                <h3>{this.props.name}</h3>
                <h4>{this.props.dept}</h4>
            </div>
        );
    }
}
export default Card2;