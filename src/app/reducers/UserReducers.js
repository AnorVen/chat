import * as UsersConst from '../const/UsersConst';

export const usersReducer = (
	state = { users: [], is_fetching: false },
	action
) => {
	switch (action.type) {
		case UsersConst.FETCH_USERS_PENDING: {
			state = { ...state, is_fetching: true };
			break;
		}
		case UsersConst.FETCH_USERS_FULFILLED: {
			state = { ...state, is_fetching: false, users: action.payload.data };
			break;
		}
		case UsersConst.FETCH_USERS_REJECTED: {
			state = {
				...state,
				is_fetching: false,
				error_message: action.payload.message,
			};
			break;
		}
	}
	return state;
};
