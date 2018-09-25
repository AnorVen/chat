import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';

class PostAuthorName extends React.Component {
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
			<span>
				{this.props.is_fetching ? (
					'Идет загрузка данных...'
				) : (
					<Link to={'/users/' + this.props.userId}>{user['name']}</Link>
				)}
			</span>
		);
	}
}

function mapStateToProps(store) {
	return {
		users: store.users.users,
		is_fetching: store.users.is_fetching,
	};
}

export default connect(mapStateToProps)(PostAuthorName);
