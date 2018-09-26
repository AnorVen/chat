import React, { Component } from 'react';
import { fetchUser } from '../actions/UserAction';
import { connect } from 'react-redux';
import UserDetails from '../components/User/UserDetails';

class User extends Component {
	constructor() {
		super(...arguments);
		console.log(this.props);
		let user = fetchUser(this.props.match.params.userId);
		this.props.dispatch(user);
	}

	render() {
		return <div>{this.props.user && <UserDetails {...this.props.user} />}</div>;
	}
}

const mapStateToProps = store => {
	console.log(store);
	return {
		user: store.user.users,
		is_fetching: store.user.is_fetching,
	};
};

export default connect(mapStateToProps)(User);
