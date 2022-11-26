import React, {Component} from "react";

class EventPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            changedValue : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            changedValue : e.target.value
        })
    }

    render(){
        const {changedValue} = this.state;

        return (
            <>
                <input type="text" onChange={this.handleChange} />
                <h2>{changedValue}</h2>
            </>
        )
    }
}

export default EventPage;