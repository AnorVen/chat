import { FETCH_SINGLE_POST } from '../constants/singlePostConstants';
import AjaxRequest from '../services/AjaxRequest';

export function fetchPost(idPost) {
	let url = 'https://my-json-server.typicode.com/IGrock88/json/posts/' + idPost;

	return {
		type: FETCH_SINGLE_POST,
		payload: new AjaxRequest().send(url),
	};
}
