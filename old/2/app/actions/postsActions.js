import axios from 'axios';
import { FETCH_POSTS } from '../constants/postsConstants';

export function fetchPosts() {
	let url = 'https://jsonplaceholder.typicode.com/posts';
	return {
		type: FETCH_POSTS,
		payload: axios.get(url),
	};
}
