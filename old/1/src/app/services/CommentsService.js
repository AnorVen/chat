import AjaxRequest from './AjaxRequest';

export default class CommentsService {
	constructor() {
		this.ajax = new AjaxRequest();
	}

	getPostComments(idPost, callback, params = null) {
		const URL =
			'https://jsonplaceholder.typicode.com/posts/' + idPost + '/comments';
		this.ajax.send(URL, callback, params);
	}

	getComments(callback, params = null) {
		const URL = 'https://jsonplaceholder.typicode.com/comments';
		const QUANTITY_COMMENTS = 100;
		params = {
			_limit: QUANTITY_COMMENTS,
		};
		this.ajax.send(URL, callback, params);
	}
}
