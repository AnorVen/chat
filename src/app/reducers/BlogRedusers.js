import * as BlogConst from '../const/BlogConst';

export default function BlogRedusers(
	state = { posts: [], is_fetching: false },
	action
) {
	switch (action.type) {
		case BlogConst.FETCH_BLOG_PENDING: {
			state = { ...state, is_fetching: true };
			break;
		}
		case BlogConst.FETCH_BLOG_FULFILLED: {
			state = { ...state, is_fetching: false, posts: action.payload.data };
			break;
		}
		case BlogConst.FETCH_BLOG_REJECTED: {
			state = {
				...state,
				is_fetching: false,
				error_message: action.payload.message,
			};
			break;
		}
		default: {
			return state;
		}
	}
	return state;
}
