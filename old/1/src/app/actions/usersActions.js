import dispacher from '../dispatcher';
import {
	ADD_USER,
	FETCH_USERS_START,
	DELETE_USER,
	EDIT_USER,
} from '../constants/usersConstants';

export function addUserAction(user) {
	dispacher.dispatch({
		type: ADD_USER,
		payload: user,
	});
}

export function fetchUser() {
	dispacher.dispatch({
		type: FETCH_USERS_START,
	});
}

export function deleteUserAction(userId) {
	dispacher.dispatch({
		type: DELETE_USER,
		payload: userId,
	});
}

export function editUserAction(user) {
	dispacher.dispatch({
		type: EDIT_USER,
		payload: user,
	});
}
