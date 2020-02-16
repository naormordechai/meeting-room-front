import React, { useEffect, useState } from 'react';
import './App.css';
import RoomPage from './pages/Room/RoomPage';
import Login from './components/Login/Login';
import AddNewUser from './components/AddNewUser/AddNewUser';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/actions/index';

function App() {
  const userInfoState = useSelector(state => state.userReducer.userInfo);
  const [minDate, setMinDate] = useState();
  const [date, setDate] = useState();
  const dispatch = useDispatch()

  const getDateFormatter = (date) => {
    var today = date;
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  };

  useEffect(() => {
    var d = new Date();
    var newMonth = d.getMonth() - 1;
    if (newMonth < 0) {
      newMonth += 12;
      d.setYear(d.getYear() - 1);
    }
    d.setMonth(newMonth);
    const t = getDateFormatter(new Date(d));
    setMinDate(t)
  }, [])


  const handlerDate = (e) => {
    setDate(e);
  };

  const onSearch = () => {
    dispatch(actions.query(date));
  };

  return (
    <div className="container">
      <input min={minDate} type="date" onChange={(e) => handlerDate(e.target.value)} />
      <button onClick={onSearch} disabled={!date}>Search</button>
      <Login />
      {userInfoState && userInfoState._id ? null : <AddNewUser />}
      <RoomPage />
    </div>
  );
}

export default App;
