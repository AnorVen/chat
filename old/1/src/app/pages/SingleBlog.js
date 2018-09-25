import React from 'react';
import SingleBlogLayout from '../components/Blog/SingleBlogLayout';

export default class SingleBlog extends React.Component {
	render() {
		return (
			<div className="col-lg-8 panel">
				<SingleBlogLayout idBlog={this.props.params.idBlog} />
			</div>
		);
	}
}
