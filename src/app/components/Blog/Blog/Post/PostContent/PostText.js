import React, { Component } from 'react';

export default class PostText extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="wall_text">
				<div className="wall_post_text">{this.props.title}</div>
				<div className="page_media_thumbed_link page_media_wrap page_media_">
					{this.props.body}
				</div>
			</div>
		);
	}
}
