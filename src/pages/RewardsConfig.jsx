import React, { Component } from "react";
import { connect } from "react-redux";
import {Container, Table, Button, InputGroup} from "react-bootstrap";

class RewardsConfig extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container>
                <h2 className="mt-5 mb-5">
                    Rewards Configuration
                </h2>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>ID Activity</th>
                        <th>Activity name</th>
                        <th>Score</th>
                        <th>Reward</th>
                        <th>Modificar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Actividad 1</td>
                        <td>
                            <InputGroup.Text id="score1">20</InputGroup.Text>
                        </td>
                        <td>
                            <InputGroup.Text id="reward1">20</InputGroup.Text>
                        </td>
                        <td>
                            <Button variant="warning">Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Actividad 2</td>
                        <td>
                            <InputGroup.Text id="score2">30</InputGroup.Text>
                        </td>
                        <td>
                            <InputGroup.Text id="reward2">30</InputGroup.Text>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button variant="warning">Edit</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RewardsConfig);
