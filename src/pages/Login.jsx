import React, { Component } from "react";
import { Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import { GoogleLogin } from 'react-google-login';
import {Container} from "react-bootstrap";
import {auth} from "../actions";
import env from "../env";

class Login extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.loadUser();
    }

    responseGoogle = (response) => {
        if(response.accessToken){
            this.props.login(response.profileObj.email, response.accessToken);
        }
    };

    render(){

        let componentRender = (this.props.isAuthenticated === true) ?
            <Redirect to={{
                pathname: '/approve'
            }}/> :
            <Container>
                <h2 className="mt-5 mb-5">
                    Bienvenido
                </h2>
                <GoogleLogin
                    clientId={env.CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Container>;
        return (
            componentRender
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        isAuthenticated: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            return dispatch(auth.loadUser());
        },
        login: (email, google_token) => {
            return dispatch(auth.login(email, google_token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
