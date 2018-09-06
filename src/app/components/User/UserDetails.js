import React from 'react';
import { connect } from 'react-redux';

class UserDetails extends React.Component {
	render() {
		if (!this.props.user) {
			return <p>Нажмите на имя пользователя</p>;
		}
		return (
			<div className="panel-body">
				<p>{this.props.user.name}</p>
				<p>{this.props.user.email}</p>
				<p>{this.props.user.phone}</p>
				<p>{this.props.user.website}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.active,
	};
}

export default connect(mapStateToProps)(UserDetails);
