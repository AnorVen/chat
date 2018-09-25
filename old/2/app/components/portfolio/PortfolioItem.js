import React from 'react';
import { Link } from 'react-router';

export default class PortfolioItem extends React.Component {
	render() {
		return (
			<div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
				<div className="mdl-card__media">
					<img
						className="article-image"
						src={'../../images/' + this.props.image}
						border="0"
						alt={this.props.title}
					/>
				</div>
				<div className="mdl-card__title">
					<h2 className="mdl-card__title-text">{this.props.title}</h2>
				</div>
				<div className="mdl-card__supporting-text">{this.props.preview}</div>
				<div className="mdl-card__actions mdl-card--border">
					<Link
						to={'/portfolio/' + this.props.id}
						className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
					>
						Read more
					</Link>
				</div>
			</div>
		);
	}
}
