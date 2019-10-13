
const initialState = {
    token: localStorage.getItem("token_evoke"),
    isAuthenticated: null,
    errors: null
};

export default function auth(state=initialState, action){
    switch (action.type){
        case 'LOGIN_SUCCESS':
            localStorage.setItem("token_evoke", action.data);
            return { isAuthenticated: true, errors: null };
        case 'USER_LOADED':
            return {...state, isAuthenticated: true};
        case 'LOGIN_FAILED':
            return {...state, isAuthenticated: false, errors: action.data};
        case 'AUTHENTICATION_ERROR':
            return {...state, isAuthenticated: false };
        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("token_evoke");
            return {...state, isAuthenticated: false, token: null};
        default:
            return state;
    }
}
