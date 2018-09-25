import * as SingleBlogConstants from '../constants/singleBlogConstants';
export function singleBlogReducer(
	state = { blog: [], is_fetching: false },
	action
) {
	switch (action.type) {
		case SingleBlogConstants.FETCH_SINGLE_BLOG_PENDING: {
			state = { state, is_fetching: true };
			break;
		}

		case SingleBlogConstants.FETCH_SINGLE_BLOG_FULFILLED: {
			state = { state, is_fetching: false, blog: action.payload.data };
			break;
		}

		case SingleBlogConstants.FETCH_SINGLE_BLOG_REJECTED: {
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
