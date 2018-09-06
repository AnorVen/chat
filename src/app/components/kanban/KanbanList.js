import React, { Component } from 'react';
import KanbanCard from './KanbanCard';

export default class KanbanList extends Component {
	render() {
		let cards = this.props.cards.map((cards, index) => {
			return (
				<KanbanCard
					id={cards.id}
					title={cards.title}
					discrition={cards.discrition}
					tasks={cards.tasks}
					key={index}
				/>
			);
		});

		return (
			<div className="list">
				<h1>{this.props.title}</h1>
				{cards}
			</div>
		);
	}
}
