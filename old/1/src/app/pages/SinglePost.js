import React from 'react';
import SinglePostLayout from '../components/Blog/SinglePostLayout';

export default class SinglePost extends React.Component {
	render() {
		return <SinglePostLayout idPost={this.props.params.idPost} />;
	}
}
