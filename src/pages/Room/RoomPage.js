import React, { useEffect } from 'react';
import RoomList from '../../components/RoomList/RoomList';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import { getDateFormatter } from '../../utility/date-formatter';


const RoomPage = () => {
    const room = useSelector(state => state.roomReducer.room);
    const userInfo = useSelector(state => state.userReducer.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.query(getDateFormatter(new Date())));
    }, [dispatch]);

    return (
        <>
            {room && room._id ? <div>
                <RoomList room={room} userInfo={userInfo}/>
            </div> : null}
        </>
    );
};

export default RoomPage;