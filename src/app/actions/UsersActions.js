import axios from 'axios';
import FETCH_USERS from '../const/UsersConst';

export function fetchUsers() {
	let url = 'https://jsonplaceholder.typicode.com/users';
	return {
		type: FETCH_USERS,
		payload: axios.get(url),
	};
}
