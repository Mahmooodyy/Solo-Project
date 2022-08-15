import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions
function* fetchHabits() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/habits', config);
    console.log('This is response.data', response.data);
    yield put({ type: 'SET_HABIT', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* addHabit(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    console.log('action.payload', action.payload);

    yield axios.post('/api/habits', action.payload, config);
    yield put({type: 'POST_HABIT', payload: action.payload});
  } catch (error) {
    console.log('User post request failed', error);
  }
}

function* deleteHabit(action) {
  console.log('this is action', action.payload);
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.delete(`/api/habits/${action.payload}`, config)
    yield put({type: 'FETCH_HABITS'});
  }
  catch (error) {
    console.log('item is too strong to be deleted', error);
  }
}




function* itemSaga() {
  yield takeLatest('FETCH_HABITS', fetchHabits);
  yield takeLatest('ADD_HABIT', addHabit);
  yield takeEvery('VANISH_HABIT', deleteHabit);
}

export default itemSaga;