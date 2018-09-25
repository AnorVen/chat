import React from 'react';
import UserEditForm from './UserEditForm';
import { deleteUserAction } from '../../actions/usersActions';

export default class UserAdminOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	deleteUser = event => {
		deleteUserAction(event.target.tabIndex);
	};

	toggleEditForm = () => {
		this.setState({
			show: !this.state.show,
		});
	};

	render() {
		if (this.props.userRole !== 'admin') return null;

		return (
			<div>
				<button
					tabIndex={this.props.user.id}
					onClick={this.deleteUser}
					className="btn btn-danger"
					role="button"
				>
					Delete user
				</button>
				<button
					tabIndex={this.props.user.id}
					onClick={this.toggleEditForm}
					className="btn btn-danger"
					role="button"
				>
					{!this.state.show ? 'Edit user' : 'Hide'}
				</button>
				<UserEditForm user={this.props.user} show={this.state.show} />
			</div>
		);
	}
}
