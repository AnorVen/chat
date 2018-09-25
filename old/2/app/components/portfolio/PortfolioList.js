import React from 'react';
import axios from 'axios';

import PortfolioItem from './PortfolioItem';

export default class PortfolioList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
		};

		axios.get('./responses/portfolio.json').then(response => {
			this.setState({
				items: response.data,
			});
		});
	}

	render() {
		if (!this.state.items.length) {
			return null;
		}

		let items = this.state.items.map((item, index) => {
			return <PortfolioItem {...item} key={index} />;
		});

		return <div className="mdl-grid portfolio-max-width">{items}</div>;
	}
}
