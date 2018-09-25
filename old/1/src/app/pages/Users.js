import React from 'react';
import UserList from '../components/User/UserList';

export default class Users extends React.Component {
	render() {
		return (
			<main className="col-lg-8">
				<div className="panel">
					<UserList />
				</div>
			</main>
		);
	}
}
