import axios from 'axios';
import { FETCH_BLOG } from '../const/BlogConst';

export function fetchBlogs() {
	let url = 'https://jsonplaceholder.typicode.com/posts';
	return {
		type: FETCH_BLOG,
		payload: axios.get(url),
	};
}
