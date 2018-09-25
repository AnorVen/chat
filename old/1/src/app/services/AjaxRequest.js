import axios from 'axios';

export default class AjaxRequest {
	send(url, callback = null, params = null) {
		if (callback === null) {
			return axios.get(url, { params: params });
		}
		axios
			.get(url, { params: params })
			.then(response => {
				console.log(response);
				callback(response.data);
			})
			.catch(errror => {
				console.log('Ошибка', errror);
			});
	}
}
