import React from 'react';
import BlogsList from '../components/Blog/BlogsList';

export default class Blogs extends React.Component {
	render() {
		return (
			<main className="col-lg-8 left-col">
				<div className="panel panel-default">
					<div className="panel-body">
						<BlogsList />
					</div>
				</div>
			</main>
		);
	}
}
