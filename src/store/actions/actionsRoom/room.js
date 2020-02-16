import * as actionTypes from './actionTypes';
import { queryRoom, updateRoomTimeByUser } from '../../../services/room-service';

export const _queryRoom = (data) => {
    return {
        type: actionTypes.SET_ROOM,
        payload: data
    }
};


export const query = (date) => async (dispatch) => {
    try {
        const { data } = await queryRoom(date);
        if (data) {
            dispatch(_queryRoom(data))
        };
    } catch (err) {
        console.log('ERROR FROM  QUERY ROOM', err);
    }
};

const _updateRoomMeetingHandler = (data) => {
    return {
        type: actionTypes.UPDATE_ROOM_TIME,
        payload: data
    }
};

export const updateRoomMeetingHandler = (roomVal) => async (dispatch) => {
    try {
        const { data } = await updateRoomTimeByUser(roomVal);
        if (data.value) {
            dispatch(_updateRoomMeetingHandler(roomVal))
        }
    } catch (err) {
        console.log('ERROR FROM  updateRoomMeetingHandler ROOM', err);

    }
}