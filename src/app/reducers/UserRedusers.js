import * as UserConst from '../const/UserConst';

export const userReducer = (
	state = { users: [], is_fetching: false },
	action
) => {
	switch (action.type) {
		case UserConst.FETCH_USER_PENDING: {
			return (state = { ...state, is_fetching: true });
		}
		case UserConst.FETCH_USER_FULFILLED: {
			return (state = {
				...state,
				is_fetching: false,
				users: action.payload.data,
			});
		}
		case UserConst.FETCH_USER_REJECTED: {
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
