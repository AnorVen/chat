import React from 'react';
import BlogItem from './BlogItem';
import LoadingAnimation from '../global/LoadingAnimation';
import PostList from './PostList';
import { fetchPosts } from '../../actions/postsActions';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/singleBlogActions';

class SingleBlogLayout extends React.Component {
	constructor(props) {
		super(props);

		this.props.dispatch(fetchBlog(this.props.idBlog));
		this.props.dispatch(fetchPosts(this.props.idBlog));
	}

	render() {
		return (
			<div>
				{this.props.is_fetching_blog || this.props.is_fetching_posts ? (
					<LoadingAnimation />
				) : (
					<div>
						<BlogItem blogs={[this.props.blog]} />
						<PostList posts={this.props.posts} />
					</div>
				)}
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		posts: store.posts.posts,
		blog: store.blog.blog,
		is_fetching_posts: store.posts.is_fetching,
		is_fetching_blog: store.blog.is_fetching,
	};
}

export default connect(mapStateToProps)(SingleBlogLayout);
