import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';

const RoomRow = ({ time, userInfo, id }) => {
    const dispatch = useDispatch();

    const onInviteRoomMeeting = () => {
        const updatedTime = {
            ...time,
            isAvialable: false,
            occupiedBy: userInfo.name,
            id
        };
        dispatch(actions.updateRoomMeetingHandler(updatedTime));
    };

    const onCancelRoomMeeting = () => {
        const updatedTime = {
            ...time,
            isAvialable: true,
            occupiedBy: '',
            id
        };
        dispatch(actions.updateRoomMeetingHandler(updatedTime));
    };

    return (
        <div className={`flex space-between`}>
            <div>{time.fromStart} - {time.toEnd}</div>
            {!time.occupiedBy ? <button disabled={!userInfo._id} onClick={onInviteRoomMeeting}>Invite</button> :
                <>
                    {time.occupiedBy === userInfo.name ? <button onClick={onCancelRoomMeeting}>Cancel</button> : <span>Occupied By {time.occupiedBy}</span>}
                </>
            }
        </div>
    );
};

export default RoomRow;