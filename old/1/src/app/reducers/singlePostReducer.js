import * as SinglePostConstant from '../constants/singlePostConstants';
export function singlePostReducer(
	state = { post: [], is_fetching: false },
	action
) {
	switch (action.type) {
		case SinglePostConstant.FETCH_SINGLE_POST_PENDING: {
			state = { state, is_fetching: true };
			break;
		}

		case SinglePostConstant.FETCH_SINGLE_POST_FULFILLED: {
			state = { state, is_fetching: false, post: action.payload.data };
			break;
		}

		case SinglePostConstant.FETCH_SINGLE_POST_REJECTED: {
			state = {
				state,
				is_fetching: false,
				error_message: action.payload.message,
			};
			break;
		}
	}
	return state;
}
