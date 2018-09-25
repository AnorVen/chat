import React from 'react';
import axios from 'axios';

import Header from '../components/header/Header';
import NavigationForSmallScreen from '../components/navigation/NavigationForSmallScreen';
import Footer from '../components/footer/Footer';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			menuItems: [],
		};

		axios.get('./responses/menu.json').then(response => {
			this.setState({
				menuItems: response.data,
			});
		});
	}

	render() {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<Header menuItems={this.state.menuItems} />
				<NavigationForSmallScreen menuItems={this.state.menuItems} />
				<main className="mdl-layout__content">
					{this.props.children}
					<Footer />
				</main>
			</div>
		);
	}
}
