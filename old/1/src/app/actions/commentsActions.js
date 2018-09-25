import { FETCH_COMMENTS } from '../constants/commentsConstants';
import AjaxRequest from '../services/AjaxRequest';

export function fetchAllComments() {
	let url = 'https://jsonplaceholder.typicode.com/comments';

	return {
		type: FETCH_COMMENTS,
		payload: new AjaxRequest().send(url),
	};
}

export function fetchCommentsByPostId(idPost) {
	let url =
		'https://jsonplaceholder.typicode.com/posts/' + idPost + '/comments';

	return {
		type: FETCH_COMMENTS,
		payload: new AjaxRequest().send(url),
	};
}
