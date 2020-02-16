import axios from 'axios';

const ROOM_URL = (process.env.NODE_ENV !== 'development')
    ? '/room'
    : '//localhost:8080/room';

export const queryRoom = async (date) => {
    console.log('queryRoom', date)
    return await axios.post(ROOM_URL, {date});
};

export const updateRoomTimeByUser = async (roomVal) => {
    return await axios.post(`${ROOM_URL}/update-room-meeting`, roomVal);
};