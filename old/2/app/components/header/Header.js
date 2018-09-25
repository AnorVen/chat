import React from 'react';

import NavigationForLargeScreen from '../navigation/NavigationForLargeScreen';

export default class Header extends React.Component {
	render() {
		return (
			<header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
				<div className="mdl-layout__header-row portfolio-logo-row">
					<span className="mdl-layout__title">
						<div className="portfolio-logo" />
						<span className="mdl-layout__title">Simple portfolio website</span>
					</span>
				</div>
				<NavigationForLargeScreen menuItems={this.props.menuItems} />
			</header>
		);
	}
}
