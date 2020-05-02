import { take, put, call, apply } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {GET_CURRENT_USER_INFO, setCurrentUser} from '../actions';
export function* currentUserSaga() {
	const { id } = yield take(GET_CURRENT_USER_INFO);
	const response = yield call(fetch, 'http://localhost:8081/user/' + id);
	// response.json().then(data => console.log(data));
	const data = yield apply(response, response.json);
	// const data = yield response.json();
	// console.log(response);
	// console.log(response.json());
	// console.log(data);
	yield put(setCurrentUser(data));
}

// export function* mySaga() {
// 	console.log("Saga begins");
// 	const state = yield take("SET_STATE");
// 	console.log("GOT state", state);
// }
//
// export function* putSaga() {
// 	// console.log("putSaga");
// 	yield delay(1000);
// 	yield put({ type: "SET_STATE", value: 42});
// }

