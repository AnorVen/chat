import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';

class UserCart extends React.Component {
	constructor(props) {
		super(props);

		let users = fetchUsers();
		this.props.dispatch(users);
	}

	render() {
		let user = [];
		for (let i = 0; i < this.props.users.length; i++) {
			if (+this.props.userId === this.props.users[i].id) {
				console.log(this.props.users[i]);
				user = this.props.users[i];
			}
		}
		return (
			<div className="mdl-grid mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
				<div className="mdl-cell mdl-cell--6-col">
					<div className="mdl-card__title-text">{user['name']}</div>
					<div className="mdl-card__supporting-text no-left-padding">
						<span>Username: {user['username']}</span>
						<br />
						<span>Phone: {user['phone']}</span>
						<br />
						<span>Email: {user['email']}</span>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		users: store.users.users,
		is_fetching: store.users.is_fetching,
	};
}

export default connect(mapStateToProps)(UserCart);
