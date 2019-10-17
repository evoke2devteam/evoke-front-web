import env from '../env';

export const loadUser = () => {
    return (dispatch, getState) => {

        let headers = { "Content-Type": "application/json"};
        let token = getState().auth.token;
        let body = JSON.stringify({ token });
        if(token){
            dispatch({type: "USER_LOADED", user: token});
            /*return fetch(`${process.env.REACT_APP_API_URL}/auth/verify-token/`, { headers, body, method: "POST" }).then((res) => {
                res.json().then((res) => {
                    if(res.status === 200){
                        dispatch({type: "USER_LOADED", user: res.data.token});
                        return res.data;
                    }else if (res.status >= 400 && res.status < 500){
                        if(res.data.non_field_errors){
                            dispatch({type:"AUTHENTICATION_ERROR", data: ''});
                            return res.data.non_field_errors;
                        }else{
                            dispatch({type: "USER_LOADED", user: res.data});
                            return res.data;
                        }
                    }
                });
            });*/
        }else{
            dispatch({type:"AUTHENTICATION_ERROR", data: 'Google account not found'});
        }
    }
};

export const login = (email, google_token, name) => {
    return (dispatch, getState) => {
            let headers = {"Content-Type": "application/json"};
            let body = {
                email,
                id_gg: google_token,
                firstName: name
            };
            return fetch(`${env.API_URL}/login`, { headers, body, method: "POST"}).then((res)=>{
                res.json().then((res) => {
                    if(res.status === 200){
                        console.log(res);
                        dispatch({type: "LOGIN_SUCCESS", data: res});
                        return res.data.token;
                    }else if (res.status >= 400 || res.status <= 500) {
                        dispatch({type: "LOGIN_FAILED", data: res.data});
                        return res.data
                    }
                });

            }).catch((err)=>{
                dispatch({type: "LOGIN_FAILED", data: ['Error al autenticar usuario!']});
            });
    }
};

export const logout = () => {
    return (dispatch, getState) => {
        dispatch({type: 'LOGOUT_SUCCESSFUL'});
    }
};
