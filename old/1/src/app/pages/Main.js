import React from 'react';
import Jumbotron from '../components/global/Jumbotron';
import News from '../components/Main/News';

export default class MainContent extends React.Component {
	render() {
		return (
			<main>
				<Jumbotron />
				<section className="col-lg-8 left-col">
					<div className="panel panel-success">
						<div className="panel-heading ">News</div>
						<News />
					</div>
				</section>
			</main>
		);
	}
}
