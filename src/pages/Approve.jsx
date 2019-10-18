import React, { Component } from "react";
import { connect } from "react-redux";
import {Container, Table, Button} from "react-bootstrap";
import * as approve from "../actions/approve";

class Approve extends Component {

    constructor(props){
        super(props);
        this.state = {
            kevin: false,
            sandra: false
        }
    }

    exchange(addressfrom, addressto, amount){
        let token = localStorage.getItem('token_evoke');
        this.props.approve.transfer(addressfrom, addressto, amount, token);
    }

    render(){
        return (
            <Container>
                <h2 className="mt-5 mb-5">
                    Approve Exchange
                </h2>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Player</th>
                        <th>Rubies</th>
                        <th>Evocoins</th>
                        <th>Currency</th>
                        <th>Exchange</th>
                        <th>Reject</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Kevin</td>
                        <td>10</td>
                        <td>10</td>
                        <td>EVC</td>
                        <td>
                            <Button variant="info" onClick = { ()=> { this.exchange('from', 'to', 10) }} >Exchange</Button>
                        </td>
                        <td>
                            <Button variant="warning">Reject</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sandra</td>
                        <td>15</td>
                        <td>15</td>
                        <td>EVC</td>
                        <td>
                            <Button variant="info" onClick = { ()=> { this.exchange('from', 'to', 15) }}>Exchange</Button>
                        </td>
                        <td>
                            <Button variant="warning">Reject</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>

        );
    }
}

const mapStateToProps = state => {
    return {
        approve: state.approve,
        transfer: state.approve.transfer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        transfer: (addressfrom, addressto, amount, token) => {
            return dispatch(approve.transfer(addressfrom, addressto, amount, token));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Approve);
