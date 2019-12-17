
const initialState = {
    listRewards: [],
};

export default function approve(state=initialState, action){
    switch (action.type){
        case 'REWARDS_LIST':
            return { listRewards: action.data };
        case 'REWARDS_LIST_ERROR':
            return { listRewards: [] };
        default:
            return state;
    }
}
