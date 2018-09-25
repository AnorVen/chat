import { FETCH_POSTS } from '../constants/postsConstants';
import AjaxRequest from '../services/AjaxRequest';

export function fetchPosts(idBlog = null) {
	let url = 'https://my-json-server.typicode.com/IGrock88/json/posts';

	return {
		type: FETCH_POSTS,
		payload: new AjaxRequest().send(url, null, { idBlog: idBlog }),
	};
}
