import React, { Component } from 'react';
import axios from 'axios';
import UserPortfolio from '../components/User/User';
import { fetchUser } from '../actions/UserAction';
import { connect } from 'react-redux';

class User extends Component {
	constructor() {
		super(...arguments);
		console.log(this.props);
		let user = fetchUser(this.props.match.params.userId);
		this.props.dispatch(user);
	}

	render() {
		return (
			<div>{this.props.user && <UserPortfolio {...this.props.user} />}</div>
		);
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
