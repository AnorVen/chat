import React, { Component } from 'react';
import PostActions from './PostActions';
import { Link } from 'react-router-dom';

export default class PostInfo extends Component {
	render() {
		return (
			<div className="post_header_info">
				<h5 className="post_author">{this.props.userId}</h5>
				<div className="post_date">
					<Link className="post_link" to={`/blog/${this.props.id}`}>
						{this.props.id}
					</Link>
				</div>
			</div>
		);
	}
}
