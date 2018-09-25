import React from 'react';

import NavigationItems from './NavigationItems';

export default class NavigationList extends React.Component {
	render() {
		if (!this.props.menuItems.length) {
			return null;
		}

		let menuItems = this.props.menuItems.map((item, index) => {
			return (
				<NavigationItems
					id={item.id}
					title={item.title}
					link={item.link}
					key={index}
				/>
			);
		});

		return (
			<nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
				{menuItems}
			</nav>
		);
	}
}
