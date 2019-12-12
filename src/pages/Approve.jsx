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
                        <th>Evocoins</th>
                        <th>Approve</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Kevin</td>
                        <td>500</td>
                        <td>
                            <Button variant="warning">Approve</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Yakkay</td>
                        <td>400</td>
                        <td>
                            <Button variant="warning">Approve</Button>
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
