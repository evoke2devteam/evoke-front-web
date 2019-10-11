import React, {Component} from 'react';
import {connect} from "react-redux";

class Header extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return(
          <h1>Bienvenido</h1>
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
