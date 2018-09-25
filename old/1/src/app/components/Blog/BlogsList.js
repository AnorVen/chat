import React from 'react';
import LoadingAnimation from '../global/LoadingAnimation';
import BlogItem from './BlogItem';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../actions/blogsActions';

class BlogsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [],
		};

		this.props.dispatch(fetchBlogs());
	}

	render() {
		return (
			<div>
				{this.props.is_fetching ? (
					<LoadingAnimation />
				) : (
					<BlogItem blogs={this.props.blogs} />
				)}
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		blogs: store.blogs.blogs,
		is_fetching: store.blogs.is_fetching,
	};
}

export default connect(mapStateToProps)(BlogsList);
