import React, { Component } from 'react';
import axios from 'axios';

import BlogItem from './Post/BlogItem';

export default class BlogList extends Component {
	/* constructor(){
    super(...arguments);

    this.state={
      posts: []
    }


 /!*   axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data
        });
      });*!/

  }*/

	render() {
		if (!this.props.posts.length) {
			return null;
		}

		let post = this.props.posts.map((post, index) => {
			return <BlogItem key={index} {...post} />;
		});
		return (
			<div className="blogList">
				<h3>Новые посты</h3>
				{post}
			</div>
		);
	}
}
