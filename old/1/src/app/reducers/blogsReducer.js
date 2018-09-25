import * as BlogsConstants from '../constants/blogsConstants';
export function blogsReducer(
	state = { blogs: [], is_fetching: false },
	action
) {
	switch (action.type) {
		case BlogsConstants.FETCH_BLOGS_PENDING: {
			state = { state, is_fetching: true };
			break;
		}

		case BlogsConstants.FETCH_BLOGS_FULFILLED: {
			state = { state, is_fetching: false, blogs: action.payload.data };
			break;
		}

		case BlogsConstants.FETCH_BLOGS_REJECTED: {
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
