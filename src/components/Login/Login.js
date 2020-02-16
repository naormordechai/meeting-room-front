import React, { useState } from 'react';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionsUser/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [userInfo, setUserInfo] = useState({ name: '' });
    const userInfoState = useSelector(state => state.userReducer.userInfo);
    const dispatch = useDispatch()

    const handlerUserInfo = (valueTxt, key) => {
        setUserInfo(prevState => ({ ...prevState, [key]: valueTxt }));
    };

    const onLogin = (e) => {
        e.preventDefault();
        dispatch(actions.loginUser(userInfo));
        setUserInfo({ name: '' });
    };

    const onLogout = () => {
        dispatch({ type: actionTypes.CLEAR_USER });
        setUserInfo({ name: '' });
    };

    const onReemoveUser = () => {
        dispatch(actions.removeUserHandler(userInfoState))
        setUserInfo({ name: '' });
    };

    return (
        <div>
            <form onSubmit={(e) => onLogin(e)}>
                <input value={userInfo.name} onChange={(e) => handlerUserInfo(e.target.value, 'name')} />
                {!userInfoState._id ? <button disabled={!userInfo.name.length} type="submit">Login</button> : null}
            </form>
            {userInfoState && userInfoState._id ? <div>
                <button onClick={onLogout}>Logout</button>
                <button onClick={onReemoveUser}>Remove User</button>
            </div>
                : null}
        </div>
    );
};

export default Login;