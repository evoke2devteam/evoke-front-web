import env from '../env';

export const transfer = (addressfrom, addressto, amount, token) => {
    return (dispatch, getState) => {

        let headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        let body = JSON.stringify({
            addressfrom,
            addressto,
            amount
        });

        return fetch(`${env.API_URL}/approve-transaction`, { headers, body, method: "POST" }).then((res) => {
            res.json().then((res) => {
                if(res.status === true){

                    dispatch({type:"TRANSFER_SUCCESS", data: res});
                    return res;
                }else{
                    dispatch({type:"TRANSFER_ERROR", data: res});
                    return res;
                }
            });
        });

    }
};
