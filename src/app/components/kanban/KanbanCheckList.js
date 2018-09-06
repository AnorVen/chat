import React, { Component } from 'react';

export default class KanbanCheckList extends Component {
	render() {
		let tasks = this.props.tasks.map((tasks, index) => {
			return (
				<li className="checkListTask" key={index}>
					<input type="checkbox" defaultChecked={tasks.done} />
					{tasks.name}
				</li>
			);
		});
		return (
			<div className="checkList">
				<ul>{tasks}</ul>
			</div>
		);
	}
}
