import React from 'react';
import { editUserAction } from '../../actions/usersActions';

// Написал валидатор на будущее
//import {isValidPhone, isValidEmail, isValidLogin, isValidName, isValidUrl} from "../../services/formValidator";

import Message from '../global/Message';

export default class UserEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: this.props.user.email,
			username: this.props.user.username,
			name: this.props.user.name,
			website: this.props.user.website,
			phone: this.props.user.phone,
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

	saveUser = () => {
		if (this.state.isValidForm) {
			let user = {
				id: this.props.user.id,
				email: this.state.email,
				username: this.state.username,
				name: this.state.name,
				website: this.state.website,
				phone: this.state.phone,
			};
			this.toggleMessage();
			editUserAction(user);
		}
	};

	render() {
		if (!this.props.show) return null;

		return (
			<div>
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
					<button onClick={this.saveUser} className="btn btn-success">
						Save
					</button>
				</div>
				<Message showMessage={this.state.isOpen}>Save is successful</Message>
			</div>
		);
	}
}
