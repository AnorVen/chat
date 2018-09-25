import * as CommentsConstants from '../constants/commentsConstants';
export function commentsReducer(
	state = { comments: [], is_fetching: false },
	action
) {
	switch (action.type) {
		case CommentsConstants.FETCH_COMMENTS_PENDING: {
			state = { ...state, is_fetching: true };
			break;
		}

		case CommentsConstants.FETCH_COMMENTS_FULFILLED: {
			state = { ...state, is_fetching: false, comments: action.payload.data };
			break;
		}

		case CommentsConstants.FETCH_COMMENTS_REJECTED: {
			state = {
				...state,
				is_fetching: false,
				xerror_message: action.payload.message,
			};
			break;
		}
	}
	return state;
}
