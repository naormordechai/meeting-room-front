import * as actionTypes from '../../actions/actionsRoom/actionTypes';
import cloneDeep from 'lodash.clonedeep';
const initialState = {
    room: {},
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ROOM:
            return {
                ...state,
                room: action.payload
            }
        case actionTypes.UPDATE_ROOM_TIME:
            const copyRoom = cloneDeep(state.room);
            let reqIdx = copyRoom.times.findIndex(time => time.fromStart === action.payload.fromStart && time.toEnd === action.payload.toEnd);
            copyRoom.times[reqIdx] = action.payload;
            return {
                ...state,
                room: copyRoom
            }
        default:
            return state;
    }
};

export default reducer;