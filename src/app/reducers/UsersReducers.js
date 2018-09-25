import * as UsersConst from '../const/UsersConst';

export const usersReducer = (
	state = { users: [], is_fetching: false },
	action
) => {
	switch (action.type) {
		case UsersConst.FETCH_USERS_PENDING: {
			return (state = { ...state, is_fetching: true });
		}
		case UsersConst.FETCH_USERS_FULFILLED: {
			return (state = {
				...state,
				is_fetching: false,
				users: action.payload.data,
			});
		}
		case UsersConst.FETCH_USERS_REJECTED: {
			return (state = {
				...state,
				is_fetching: false,
				error_message: action.payload.message,
			});
		}
		default:
			return state;
	}
};
