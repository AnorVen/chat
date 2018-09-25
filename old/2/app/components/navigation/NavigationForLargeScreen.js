import React from 'react';

import NavigationList from './NavigationList';

export default class NavigationForLargeScreen extends React.Component {
	render() {
		return (
			<div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
				<NavigationList menuItems={this.props.menuItems} />
			</div>
		);
	}
}
