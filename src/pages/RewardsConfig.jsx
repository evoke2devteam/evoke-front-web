import React, { Component } from "react";
import { connect } from "react-redux";
import {Container, Table, Button, InputGroup, Form} from "react-bootstrap";
import * as rewards from "../actions/rewards";
import env from "../env";

class RewardsConfig extends Component {

    constructor(props){
        super(props);
    }

    getListRewards(){
        this.props.getListRewards(env.COUSE_ID, this.getToken());
    }

    getToken(){
        return localStorage.getItem('token_evoke');
    }

    componentDidMount () {
        this.getListRewards();
    }

    render(){
        let { listRewards } = this.props;
        const renderRewards = listRewards.map((activity, i) => {
            return  (
                <tr key={i}>
                    <td>{activity.cmid}</td>
                    <td>
                        <Form.Control type="text" value={activity.reward_1} />
                    </td>
                    <td>
                        <Form.Control type="text" value={activity.reward_2} />
                    </td>
                    <td>
                        <Form.Control type="text" value={activity.reward_3} />
                    </td>
                    <td>
                        <Button variant="warning">Edit</Button>
                    </td>
                </tr>
            );
        });
        return (
            <Container>
                <h2 className="mt-5 mb-5">
                    Setup Rewards
                </h2>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>ID Activity</th>
                        <th>Completed reward</th>
                        <th>Completed and approved reward</th>
                        <th>Completed and disapproved reward</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderRewards}
                    </tbody>
                </Table>
            </Container>

        );
    }
}

const mapStateToProps = state => {
    return {
        rewards: state.rewards,
        listRewards: state.rewards.listRewards
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getListRewards: (idCourse, token) => {
            return dispatch(rewards.listRewards(idCourse, token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsConfig);
