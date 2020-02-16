import axios from 'axios';

const USER_URL = (process.env.NODE_ENV !== 'development')
    ? '/user'
    : '//localhost:8080/user';

const LOGIN_URL = (process.env.NODE_ENV !== 'development')
    ? '/login'
    : '//localhost:8080/login';

export const login = async (user) => {
    return await axios.post(LOGIN_URL, user);
};

export const removeUser = async (user) => {
    return await axios.post(`${USER_URL}/remove`, user);
}

export const insertUser = async (user) => {
    return await axios.post(`${USER_URL}/insert`, user);
};