import * as actionTypes from './actionTypes';
import { login, removeUser, insertUser } from '../../../services/userService';

export const _loginUser = (data) => {
    return {
        type: actionTypes.SET_USER,
        payload: data
    }
};

export const _logoutUser = () => {
    return {
        type: actionTypes.CLEAR_USER,
        payload: null
    }
}

export const loginUser = (user) => async (dispatch) => {
    try {
        const { data } = await login(user);
        if (data) {
            dispatch(_loginUser(data))
        };
    } catch (err) {
        console.log('ERROR UPDATE ACTIVAVTE USER', err);
    }
};

export const _removeUserHandler = (data) => {
    return {
        type: actionTypes.CLEAR_USER,
        payload: data
    }
};

export const removeUserHandler = (user) => async (dispatch) => {
    try {
        await removeUser(user);
    } catch (err) {
        console.log('ERROR OCCURED IN removeUser FUNCTION');
    }
    dispatch(_logoutUser());
};

const _insertUserHandler = (data) => {
    return {
        type: actionTypes.ADD_NEW_USER,
        payload: data
    }
}


export const insertUserHandler = user => async (dispatch) => {
    try {
        const { data } = await insertUser(user);
        if (data) {
            dispatch(_insertUserHandler(data))
        }
    } catch (err) {
        console.log('ERROR OCCURED IN insertUserHandler FUNCTION');

    }
};