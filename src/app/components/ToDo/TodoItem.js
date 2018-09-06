import React, { Component } from 'react';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handelChenge = this.handelChenge.bind(this);
		this.rendEdit = this.rendEdit.bind(this);
		this.rendNorm = this.rendNorm.bind(this);
		this.save = this.save.bind(this);
		this.edit = this.edit.bind(this);

		this.state = {
			children: this.props.children,
			check: false,
			edit: false,
		};
	}

	handelChenge() {
		this.setState({
			check: !this.state.check,
		});
	}

	edit() {
		this.setState({
			edit: true,
		});
	}

	save() {
		this.setState({
			children: this.refs.textarea.value,
			edit: false,
		});
	}

	remove = () => {
		this.props.remove(this.props.id);
	};

	rendNorm() {
		return (
			<div className="box">
				<div className="text">{this.state.children}</div>
				<button className="btn btn-light" onClick={this.edit}>
					Редактировать
				</button>
				<button className="btn red" onClick={this.remove}>
					удалить
				</button>
				<input
					type="checkbox"
					defaultChecked={this.state.check}
					onChange={this.handelChenge}
				/>
				<p>{this.state.check === true ? 'выбрано' : 'не выбрано'}</p>
			</div>
		);
	}

	rendEdit() {
		return (
			<div className="box">
				<textarea
					className="text"
					defaultValue={this.state.children}
					ref="textarea"
				/>
				<button className="btn btn-success" onClick={this.save}>
					SAVE
				</button>
			</div>
		);
	}

	render() {
		let rend = !this.state.edit ? this.rendNorm() : this.rendEdit();

		return <div>{rend}</div>;
	}
}
