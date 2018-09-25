import AjaxRequest from './AjaxRequest';

export default class BlogService {
	constructor() {
		this.ajaxRequest = new AjaxRequest();
	}

	getBlogs(callback, params = null) {
		const URL = 'https://my-json-server.typicode.com/IGrock88/json/blogs';
		this.ajaxRequest.send(URL, callback, params);
	}

	getOneBlog(id, callback, params = null) {
		const URL = 'https://my-json-server.typicode.com/IGrock88/json/blogs/' + id;
		this.ajaxRequest.send(URL, callback, params);
	}

	getPostsByBlogId(idBlog, callback, params = null) {
		const URL = 'https://my-json-server.typicode.com/IGrock88/json/posts';
		params = {
			idBlog: idBlog,
		};
		this.ajaxRequest.send(URL, callback, params);
	}

	deleteOneBlog(id, params = null) {
		// TODO: реализовать метод удаления 1 блога по ид
	}
}
