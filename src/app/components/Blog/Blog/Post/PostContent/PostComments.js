import React, { Component } from 'react';

export default class PostComments extends Component {
	render() {
		return (
			<div className="replies">
				<div className="reply_fakebox">Написать комментарий...</div>

				<input defaultValue={`${this.props.id}`} />
			</div>
		);
	}
}
