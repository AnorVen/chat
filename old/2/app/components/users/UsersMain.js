import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';

import UsersList from './UsersList';

class UsersMain extends React.Component {
	constructor() {
		super(...arguments);

		let users = fetchUsers();
		this.props.dispatch(users);
	}

	render() {
		let users = this.props.users.map((user, index) => {
			return (
				<UsersList
					id={user.id}
					name={user.name}
					phone={user.phone}
					key={index}
				/>
			);
		});

		return (
			<div className="mdl-grid portfolio-max-width">
				<div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
					<ul className="demo-list-icon mdl-list">
						{this.props.is_fetching ? 'Идет загрузка данных...' : users}
					</ul>
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

export default connect(mapStateToProps)(UsersMain);
