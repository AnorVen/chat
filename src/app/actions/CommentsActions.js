import Dispatcher from '../Dispatcher';
import {
	ADD_COMMENT,
	FETCH_COMMENTS_START,
	EDIT_COMMENT,
	SHOW_COMMENT,
} from '../const/CommentsConst';

export function addComment(title, userId, body) {
	const comment = {
		title,
		userId,
		body,
	};
	Dispatcher.dispatch({
		type: ADD_COMMENT,
		payload: comment,
	});
}

export function fetchComments() {
	Dispatcher.dispatch({
		type: FETCH_COMMENTS_START,
	});
}

export function editComment(id, title, userId, body) {
	const comment = {
		id,
		title,
		userId,
		body,
	};
	Dispatcher.dispatch({
		type: EDIT_COMMENT,
		payload: comment,
	});
}

export function showComment(id) {
	Dispatcher.dispatch({
		type: SHOW_COMMENT,
	});
}
