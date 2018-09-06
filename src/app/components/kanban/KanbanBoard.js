import React, { Component } from 'react';
import KanbanList from './KanbanList';

export default class KanbanBoard extends Component {
	render() {
		let cardList = [
			{
				id: 1,
				title: 'read book',
				discrition: 'book for React',
				status: 'done',
				tasks: [],
			},
			{
				id: 2,
				title: 'learn ',
				discrition: 'learn',
				status: 'todo',
				tasks: [
					{
						id: 1,
						name: 'learn jsx',
						done: true,
					},
					{
						id: 2,
						name: 'learn routing',
						done: false,
					},
					{
						id: 3,
						name: 'learn store',
						done: false,
					},
				],
			},
			{
				id: 3,
				title: 'sleep',
				discrition: 'sleep',
				status: 'in-progress',
				tasks: [],
			},
			{
				id: 4,
				title: 'kanban',
				discrition: 'kanban',
				status: 'in-progress',
				tasks: [],
			},
		];
		return (
			<div className="kanban">
				<KanbanList
					id="todo"
					title="ToDo"
					cards={cardList.filter(cards => cards.status === 'todo')}
				/>
				<KanbanList
					id="inProgress"
					title="In progress"
					cards={cardList.filter(cards => cards.status === 'in-progress')}
				/>
				<KanbanList
					id="done"
					title="DONE"
					cards={cardList.filter(cards => cards.status === 'done')}
				/>
			</div>
		);
	}
}
