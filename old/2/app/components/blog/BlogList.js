import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postsActions';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
	constructor() {
		super(...arguments);

		let posts = fetchPosts();
		this.props.dispatch(posts);
	}

	render() {
		let posts = this.props.posts.map((post, index) => {
			return (
				<BlogItem
					id={post.id}
					userId={post.userId}
					title={post.title}
					body={post.body}
					key={index}
				/>
			);
		});

		return (
			<div className="mdl-grid portfolio-max-width">
				{this.props.is_fetching ? 'Идет загрузка данных...' : posts}
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

export default connect(mapStateToProps)(BlogList);
