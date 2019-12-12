import React, {Component} from 'react';
import {connect} from "react-redux";
import {Navbar, Nav} from "react-bootstrap";
import {auth} from "../actions";

class Header extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.logout();
    }

    render() {

        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Evoke Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-0">
                        <Nav.Link href="/approve">Approve</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="/rewards">Rewards Config</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="">
                    <Nav.Item onClick={this.logout}>Logout</Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            return dispatch(auth.logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
