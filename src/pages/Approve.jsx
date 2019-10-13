import React, { Component } from "react";
import { connect } from "react-redux";
import {Container, Table, Button} from "react-bootstrap";

class Approve extends Component {

    constructor(props){
        super(props);
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
                        <td>500</td>
                        <td>500</td>
                        <td>EVC</td>
                        <td>
                            <Button variant="info">Exchange</Button>
                        </td>
                        <td>
                            <Button variant="warning">Reject</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Yakkay</td>
                        <td>400</td>
                        <td>400</td>
                        <td>EVC</td>
                        <td>
                            <Button variant="info">Exchange</Button>
                        </td>
                        <td>
                            <Button variant="warning">Reject</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Oscar</td>
                        <td>300</td>
                        <td>300</td>
                        <td>EVC</td>
                        <td>
                            <Button variant="info">Exchange</Button>
                        </td>
                        <td>
                            <Button variant="warning">Reject</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Sandra</td>
                        <td>200</td>
                        <td>200</td>
                        <td>EVC</td>
                        <td>
                            <Button variant="info">Exchange</Button>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Approve);
