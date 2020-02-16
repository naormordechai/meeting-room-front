import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';

const AddNewUser = () => {
    const [isDisplayInput, setIsDisplayInput] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: '' });
    const dispatch = useDispatch();

    const handlerUserInfo = (valueTxt, key) => {
        setUserInfo(prevState => ({ ...prevState, [key]: valueTxt }));
    };

    const onAddNewUser = () => {
        dispatch(actions.insertUserHandler(userInfo));
    };

    return (
        <div>
            <button onClick={() => setIsDisplayInput(true)}>Click to add user</button>
            {isDisplayInput ? <div>
                <input value={userInfo.name} onChange={(e) => handlerUserInfo(e.target.value, 'name')} />
                <button onClick={onAddNewUser}>Add</button>
            </div> : null}
        </div>
    );
};

export default AddNewUser;  