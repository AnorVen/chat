import React from 'react';
import { Link } from 'react-router';

export default class BlogItem extends React.Component {
	render() {
		let blogs = this.props.blogs.map((blog, index) => (
			<div className="thumbnail" key={index}>
				<div className="caption">
					<h3>
						<Link to={'/blog/' + blog.id}>{blog.title}</Link>
					</h3>
					<p>
						<Link to={'/users/show/' + blog.idUser}>Author: {blog.author}</Link>
					</p>
				</div>
			</div>
		));
		return <div>{blogs}</div>;
	}
}
