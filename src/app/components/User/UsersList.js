import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { select } from '../../actions/index';
import User from './User';
import UserDetails from './UserDetails';

function mapStateToProps(state) {
	return {
		users: state.users,
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ select: select }, dispatch);
}

class UsersList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: this.props.users,
		};
	}

	/*
   axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response) => {
          this.setState({
          users: response.data
       });
    });
  }
*/

	render() {
		if (!this.state.users.length) {
			return <div>user - 0;</div>;
		}

		let users = this.state.users.map((user, index) => {
			return (
				<User onClick={() => this.props.select(user)} key={index} {...user} />
			);
		});

		return (
			<div>
				<div>
					<UserDetails />
				</div>
				<h1>Пользователи</h1>
				{users}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(UsersList);
