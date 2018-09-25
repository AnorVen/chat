import React from 'react';

import NavigationList from './NavigationList';

export default class NavigationForSmallScreen extends React.Component {
	render() {
		return (
			<div className="mdl-layout__drawer mdl-layout--small-screen-only">
				<NavigationList menuItems={this.props.menuItems} />
			</div>
		);
	}
}
