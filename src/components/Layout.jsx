import Header from './Header';
import Footer from './Footer';
import React, {Component} from 'react';
import {auth} from "../actions";
import {connect} from "react-redux";

class Layout extends Component {

    componentDidMount() {
        this.props.loadUser();
    }

    render() {
        return (
            <div class="generalContainer">
                {(this.props.isAuthenticated === true) ?
                    <Header /> : ''
                }
                <div class="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
