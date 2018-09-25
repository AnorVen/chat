import React from 'react';
import axios from 'axios';

export default class PortfolioExampleItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
		};

		axios.get(`../../responses/portfolio.json`).then(response => {
			this.setState({
				items: response.data,
			});
			for (let i = 0; i < this.state.items.length; i++) {
				if (this.state.items[i].id === +this.props.portfolioId) {
					this.setState({
						items: this.state.items[i],
					});
				}
			}
		});
	}

	render() {
		return (
			<div className="mdl-grid portfolio-max-width">
				<div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
					<div className="mdl-card__title">
						<h2 className="mdl-card__title-text">{this.state.items.title}</h2>
					</div>
					<div className="mdl-card__media">
						<img
							className="article-image"
							src={'../../images/' + this.state.items.image_example}
							border="0"
							alt={this.state.items.title}
						/>
					</div>
					<div className="mdl-card__supporting-text">
						<strong>Includes </strong>
						<span>{this.state.items.includes}</span>
					</div>
					<div className="mdl-grid portfolio-copy">
						<div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding">
							<p>{this.state.items.body}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
