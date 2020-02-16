import React from 'react';
import RoomRow from '../RoomRow/RoomRow';
import uniqid from 'uniqid';

const RoomList = ({ room, userInfo }) => {
    return (
        <div>
            {room ? room.times.map(time => (
                <RoomRow id={room._id} userInfo={userInfo} time={time} key={uniqid()}/>
            )) : null}
        </div>
    );
};

export default RoomList;