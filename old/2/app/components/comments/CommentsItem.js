import React from 'react';

export default class CommentsItem extends React.Component {
	render() {
		return (
			<div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
				<div className="mdl-card__title">
					<span>{this.props.name}</span>
				</div>
				<div className="mdl-grid portfolio-copy">
					<div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding">
						<p>{this.props.body}</p>
						<span>email: {this.props.email}</span>
					</div>
				</div>
			</div>
		);
	}
}
