import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class AppPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogin: false
        }
    }

    render() {

        const {isLogin} = this.state;

        let element;

        if(isLogin){
            element = <HomePage />
        }
        else {
            element = <LoginPage />
        }

        return (
            <>
                {element}
            </>
        )
    }
}
export default AppPage;