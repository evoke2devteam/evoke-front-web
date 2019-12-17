import env from '../env';

export const transfer = (activityId, amount, userAddress, token) => {
    return (dispatch, getState) => {

        let headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        let body = JSON.stringify({
            mission_id: activityId,
            score: amount,
            user: userAddress
        });

        return fetch(`${env.API_URL}/mission/pay-score`, { headers, body, method: "POST" }).then((res) => {
            res.json().then((res) => {
                if(res.status === true){
                    dispatch({type:"TRANSFER_SUCCESS", data: res});
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

export const listRewards = (idCourse, token) => {
    return (dispatch, getState) => {

        let headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        let body = JSON.stringify({
            mission_id: idCourse
        });

        return fetch(`${env.API_URL}/mission/get-score`, { headers, body, method: "POST" }).then((res) => {
            res.json().then((res) => {
                console.log(res.data.statuses)
                if(res.status === true){
                    dispatch({type:"REWARDS_LIST", data: res.data.statuses});
                    return res;
                }else{
                    dispatch({type:"REWARDS_LIST_ERROR"});
                }
            }).catch(()=>{
                dispatch({type:"REWARDS_LIST_ERROR"});
            });
        });

    }
};
