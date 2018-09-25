import React from 'react';
import { Link } from 'react-router';

import PostAuthorName from './PostAuthorName';

export default class BlogItem extends React.Component {
	render() {
		return (
			<div className="mdl-grid mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
				<div className="mdl-card__media mdl-cell mdl-cell--12-col-tablet">
					<img
						className="article-image"
						src="../../images/example-blog01.jpg"
						border="0"
						alt={this.props.title}
					/>
				</div>
				<div className="mdl-cell mdl-cell--8-col">
					<Link to={'/blog/' + this.props.id} className="mdl-card__title-text">
						{this.props.title}
					</Link>
					<div className="mdl-card__supporting-text padding-top">
						<span>Posted 2 days ago</span>
						<div id="tt1" className=" icon material-icons portfolio-share-btn">
							share
						</div>
						<div className="mdl-tooltip" htmlFor="tt1">
							Share via social media
						</div>
					</div>
					<div className="mdl-card__supporting-text no-left-padding">
						<p>{this.props.body}</p>
						<span>
							Author: <PostAuthorName userId={this.props.userId} />
						</span>
					</div>
				</div>
			</div>
		);
	}
}
