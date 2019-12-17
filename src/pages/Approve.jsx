import React, { Component } from "react";
import { connect } from "react-redux";
import {Container, Table, Button} from "react-bootstrap";
import * as approve from "../actions/approve";
import env from "../env";

class Approve extends Component {

    constructor(props){
        super(props);
    }

    exchange(activityId, score, userId){
        this.props.transfer(activityId, score, userId, this.getToken());
    }

    getListTransactions(){
        this.props.listTransactions(env.COUSE_ID, this.getToken());
    }

    getToken(){
        return localStorage.getItem('token_evoke');
    }

    componentDidMount () {
        this.getListTransactions();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.transactionApproved === true){
            alert("Transaction successful");
            this.getListTransactions();
        }else if(nextProps.transactionApproved === false){
            alert("Error transaction");
        }
    }

    render(){
        let {listPendingTransactions} = this.props;
        const renderPendingtransactions = listPendingTransactions.map((user) => {
            return user.statuses.map((transaction, i)=>{
                if(transaction.state !== 0 && transaction.paid_status !== true)
                    return  (
                        <tr key={i}>
                            <td>{transaction.cmid}</td>
                            <td>{user.username}</td>
                            <td>{transaction.modname}</td>
                            {
                                (transaction.state === 1) ? <td>Completed</td> :
                                    (transaction.state === 2) ? <td>Completed and approved </td> :
                                        (transaction.state === 3) ? <td>Completed and disapproved </td> : ''
                            }
                            <td>{transaction.reward} EVC</td>
                            <td>
                                <Button variant="warning" onClick={()=> this.exchange(transaction.cmid, transaction.state, user.id)}>Approve</Button>
                            </td>
                        </tr>
                    );
            });
        });
        return (
            <Container>
                <h2 className="mt-5 mb-5">
                    Approve Reward Payment
                </h2>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Player</th>
                        <th>Activity</th>
                        <th>Status</th>
                        <th>EVC</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {renderPendingtransactions}
                    </tbody>
                </Table>
            </Container>

        );
    }
}

const mapStateToProps = state => {
    return {
        approve: state.approve,
        listPendingTransactions: state.approve.listPendingTransactions,
        transactionApproved: state.approve.transactionApproved
    };
};

const mapDispatchToProps = dispatch => {
    return {
        transfer: (activityId, score, userId, token) => {
            return dispatch(approve.transfer(activityId, score, userId, token));
        },
        listTransactions: (idCourse, token) => {
            return dispatch(approve.listTransactions(idCourse, token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Approve);
