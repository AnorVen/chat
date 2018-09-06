import React, { Component } from 'react';
import KanbanCheckList from './KanbanCheckList';

export default class KanbanCard extends Component {
	render() {
		return (
			<div className="card">
				<div className="cardTitle">{this.props.title}</div>
				<div className="cardDisk">
					{this.props.discrition}
					<KanbanCheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
			</div>
		);
	}
}
