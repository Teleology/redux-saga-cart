import {SET_CURRENT_USER, setCartItems} from '../actions';
import { take, put } from 'redux-saga/effects';

export function* fetchCartSaga() {
	const { user: {id} } = yield take(SET_CURRENT_USER);
	const response = yield fetch('http://localhost:8081/cart/' + id);
	const { items } = yield response.json();
	yield put(setCartItems(items));
	console.info("setCardItems", items);
}