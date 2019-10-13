import React, {Component} from 'react';
import {connect} from "react-redux";
import {Navbar, Nav} from "react-bootstrap";

class Header extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Evoke Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="/approve">Approve</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
