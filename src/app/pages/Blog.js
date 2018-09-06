import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogList from '../components/Blog/Blog/BlogList';
import { fetchBlogs } from '../actions/BlogActions';

class Blog extends Component {
	constructor() {
		super(...arguments);

		let posts = fetchBlogs();
		this.props.dispatch(posts);
	}

	render() {
		return (
			<div>
				{!this.props.children ? (
					this.props.is_fetching ? (
						'loading'
					) : (
						<BlogList posts={this.props.posts} />
					)
				) : (
					this.props.children
				)}
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		posts: store.posts.posts,
		is_fetching: store.posts.is_fetching,
	};
}

export default connect(mapStateToProps)(Blog);
