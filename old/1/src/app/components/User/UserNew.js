import React from 'react';
import { addUserAction } from '../../actions/usersActions';
// Написал валидатор на будущее
//import {isValidPhone, isValidEmail, isValidLogin, isValidName, isValidUrl} from "../../services/formValidator";

import Message from '../global/Message';

export default class UserNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			name: '',
			website: '',
			phone: '',
			isValidForm: true, // валидация пока не готова,
			isOpen: false,
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	toggleMessage = () => {
		this.setState({ isOpen: !this.state.isOpen });
		setTimeout(() => {
			this.setState({ isOpen: !this.state.isOpen });
		}, 3000);
	};

	addUser = () => {
		if (this.state.isValidForm) {
			let user = {
				email: this.state.email,
				username: this.state.username,
				name: this.state.name,
				website: this.state.website,
				phone: this.state.phone,
			};
			addUserAction(user);
			this.toggleMessage();
		}
	};

	render() {
		if (!this.props.show) return null;

		return (
			<div className="panel panel-default">
				<div className="input-group">
					<span className="input-group-addon user_edit__label">Email</span>
					<input
						name="email"
						type="email"
						className="form-control"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</div>
				<div className="input-group">
					<span className="input-group-addon user_edit__label">Login</span>
					<input
						name="username"
						type="text"
						className="form-control"
						placeholder="Login"
						value={this.state.username}
						onChange={this.handleChange}
					/>
				</div>
				<div className="input-group">
					<span className="input-group-addon user_edit__label">Full name</span>
					<input
						name="name"
						type="text"
						className="form-control"
						placeholder="Full name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</div>
				<div className="input-group">
					<span className="input-group-addon user_edit__label">Website</span>
					<input
						name="website"
						type="text"
						className="form-control"
						placeholder="Website"
						value={this.state.website}
						onChange={this.handleChange}
					/>
				</div>
				<div className="input-group">
					<span className="input-group-addon user_edit__label">Phone</span>
					<input
						name="phone"
						type="text"
						className="form-control"
						placeholder="Phone"
						value={this.state.phone}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<button onClick={this.addUser} className="btn btn-success">
						Save
					</button>
				</div>
				<Message showMessage={this.state.isOpen}>
					Adding the new user successfully
				</Message>
			</div>
		);
	}
}
