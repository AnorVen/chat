import axios from 'axios';
import { FETCH_USER } from '../const/UserConst';

export function fetchUser(id) {
	let url = `https://jsonplaceholder.typicode.com/users/${id}`;
	return {
		type: FETCH_USER,
		payload: axios.get(url),
	};
}
