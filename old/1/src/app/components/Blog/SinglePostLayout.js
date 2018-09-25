import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/singlePostActions';
import PostItem from '../../components/Blog/PostItem';
import LoadingAnimation from '../../components/global/LoadingAnimation';
import BlogItem from '../../components/Blog/BlogItem';
import CommentsList from '../Comments/CommentsList';

class SinglePostLayout extends React.Component {
	constructor(props) {
		super(props);
		this.props.dispatch(fetchPost(this.props.idPost));
	}

	render() {
		return (
			<div className="col-lg-8 panel">
				{this.props.is_fetching_post ? (
					<LoadingAnimation />
				) : (
					<div>
						<BlogItem blogs={[this.props.blog]} />
						<PostItem post={this.props.post} />
						<CommentsList idPost={this.props.idPost} />
					</div>
				)}
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		post: store.post.post,
		blog: store.blog.blog, // блог берем из состояния
		is_fetching_post: store.post.is_fetching,
	};
}

export default connect(mapStateToProps)(SinglePostLayout);
