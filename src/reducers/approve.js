
const initialState = {
    transfer: false
};

export default function approve(state=initialState, action){
    switch (action.type){
        case 'TRANSFER_SUCCESS':
            return { transfer: true };
        case 'TRANSFER_ERROR':
            return { transfer: false };
        default:
            return state;
    }
}
