
const initialState = {
    listPendingTransactions: [],
    transactionApproved: null
};

export default function approve(state=initialState, action){
    switch (action.type){
        case 'PENDING_TRANSACTION_LIST':
            console.log(action.data.data)
            return { listPendingTransactions: action.data.data };
        case 'PENDING_TRANSACTION_LIST_ERROR':
            return { listPendingTransactions: [] };
        case 'TRANSFER_SUCCESS':
            return { ...state, transactionApproved: true };
        case 'TRANSFER_ERROR':
            return { ...state, transactionApproved: false };
        default:
            return state;
    }
}
