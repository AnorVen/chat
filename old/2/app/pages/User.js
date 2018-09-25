import React from 'react';

import UserCart from '../components/users/UserCart';

export default class User extends React.Component {
	render() {
		return (
			<div className="mdl-grid portfolio-max-width">
				<UserCart userId={this.props.params.userId} />
			</div>
		);
	}
}
