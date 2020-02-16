import * as actionTypes from '../../actions/actionsUser/actionTypes';
const initialState = {
    userInfo: {},
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                userInfo: action.payload
            }
        case actionTypes.ADD_NEW_USER:
            return {
                ...state,
                userInfo: action.payload
            }
        case actionTypes.CLEAR_USER:
            return initialState;
        default:
            return state;
    }
};

export default reducer;