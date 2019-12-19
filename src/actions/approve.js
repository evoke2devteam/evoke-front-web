import env from '../env';

export const transfer = (activityId, amount, userId, token) => {
    return (dispatch, getState) => {

        let headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        let body = JSON.stringify({
            mission_id: activityId,
            score: amount,
            user: userId,
            admin: 5
        });

        return fetch(`${env.API_URL}/mission/pay-score`, { headers, body, method: "POST" }).then((res) => {
            res.json().then((res) => {
                if(res.status === true){
                    dispatch({type:"TRANSFER_SUCCESS", data: res.status});
                    return res;
                }else{
                    dispatch({type:"TRANSFER_ERROR"});
                }
            }).catch(()=>{
                dispatch({type:"TRANSFER_ERROR"});
            });
        });

    }
};

export const listTransactions = (idCourse, token) => {
    return (dispatch, getState) => {

        let headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        let body = JSON.stringify({
           id: idCourse
        });

        return fetch(`${env.API_URL}/mission/get-states-user`, { headers, body, method: "POST" }).then((res) => {
            res.json().then((res) => {
                if(res.status === true){
                    dispatch({type:"PENDING_TRANSACTION_LIST", data: res});
                    return res;
                }else{
                    dispatch({type:"PENDING_TRANSACTION_LIST_ERROR"});
                }
            }).catch(()=>{
                dispatch({type:"PENDING_TRANSACTION_LIST_ERROR"});
            });
        });

    }
};
