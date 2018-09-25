import React from 'react';

import PortfolioExampleItem from '../components/portfolio/PortfolioExampleItem';

export default class PortfolioExample extends React.Component {
	render() {
		return <PortfolioExampleItem portfolioId={this.props.params.portfolioId} />;
	}
}
