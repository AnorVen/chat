import { FETCH_SINGLE_BLOG } from '../constants/singleBlogConstants';
import AjaxRequest from '../services/AjaxRequest';

export function fetchBlog(idBlog) {
	let url = 'https://my-json-server.typicode.com/IGrock88/json/blogs/' + idBlog;

	return {
		type: FETCH_SINGLE_BLOG,
		payload: new AjaxRequest().send(url),
	};
}
