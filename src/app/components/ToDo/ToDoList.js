import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class ToDoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					text: 'todo1',
				},
			],
		};
	}

	remove = i => {
		let newItems = this.state.items;
		newItems.splice(i, 1);
		this.setState({
			items: newItems,
		});
	};
	add = () => {
		let newItems = this.state.items;
		let newItem = { text: 'новое задание' };
		newItems.push(newItem);
		this.setState({
			items: newItems,
		});
	};

	render() {
		let item = this.state.items.map((item, index) => {
			return (
				<TodoItem remove={this.remove} key={index} id={index}>
					{item.text}
				</TodoItem>
			);
		});

		return (
			<div>
				{item}
				<button className="btn btn-outline-primary" onClick={this.add}>
					Добавить задание
				</button>
			</div>
		);
	}
}
