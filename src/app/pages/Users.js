import React, { Component } from 'react';
import UsersList from '../components/User/UsersList';
import { fetchUsers } from '../actions/UsersActions';
import { connect } from 'react-redux';

class Users extends Component {
	constructor() {
		super(...arguments);
		let users = fetchUsers();
		this.props.dispatch(users);
	}

	render() {
		return (
			<div>
				{!this.props.children ? (
					this.props.is_fetching ? (
						'loading...'
					) : (
						<UsersList users={this.props.users} />
					)
				) : (
					this.props.children
				)}
			</div>
		);
	}
}

const mapStateToProps = store => {
	console.log(store);
	return {
		users: store.users.users,
		is_fetching: store.users.is_fetching,
	};
};

export default connect(mapStateToProps)(Users);
