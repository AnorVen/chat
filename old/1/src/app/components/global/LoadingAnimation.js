import React from 'react';

export default class LoadingAnimation extends React.Component {
	render() {
		return (
			<div className="animation_holder panel panel-default">
				<div className="cube3d__container">
					<div className="cube3d__side cube3d__top">React Blog</div>
					<div className="cube3d__side cube3d__bottom">React Blog</div>
					<div className="cube3d__side cube3d__left">React Blog</div>
					<div className="cube3d__side cube3d__right">React Blog</div>
					<div className="cube3d__side cube3d__back">React Blog</div>
					<div className="cube3d__side cube3d__front">React Blog</div>
				</div>
			</div>
		);
	}
}
