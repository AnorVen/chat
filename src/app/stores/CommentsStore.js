import { EventEmitter } from 'events';
import {
	ADD_COMMENT,
	FETCH_COMMENTS_START,
	FETCH_COMMENTS_END,
	SHOW_COMMENT,
	EDIT_COMMENT,
} from '../const/CommentsConst';
import Dispatcher from '../Dispatcher';
import axios from 'axios';

class CommentsStore extends EventEmitter {
	constructor() {
		super(...arguments);

		this.comments = [];

		this.addComent = this.addComent.bind(this);
		this.fetchCommentsEnd = this.fetchCommentsEnd.bind(this);
		this.fetchCommentsStart = this.fetchCommentsStart.bind(this);
		this.handleAction = this.handleAction.bind(this);
		this.change = this.change.bind(this);
	}

	fetchCommentsStart() {
		axios
			.get('https://jsonplaceholder.typicode.com/comments')
			.then(response => {
				Dispatcher.dispatch({
					type: FETCH_COMMENTS_END,
					payload: response.data,
				});
			});
	}

	fetchCommentsEnd(comments) {
		this.comments = comments;
		this.change();
	}

	change() {
		this.emit('change', this.comments);
	}

	addComent(comment) {
		this.comments.push(comment);
		this.change();
	}

	handleAction(action) {
		switch (action.type) {
			case ADD_COMMENT: {
				this.addComent(action.payload);
				break;
			}
			case FETCH_COMMENTS_START: {
				this.fetchCommentsStart();
				break;
			}
			case FETCH_COMMENTS_END: {
				this.fetchCommentsEnd(action.payload);
				break;
			}
			default:
				return this.comments;
		}
	}
}

const cS = new CommentsStore();
Dispatcher.register(cS.handleAction);

export default cS;
