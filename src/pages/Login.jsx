import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {

    recaptchaRef = React.createRef();

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false
        };
    }

    componentWillReceiveProps(){

    }

    render(){
        return (
            <div>Login</div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
