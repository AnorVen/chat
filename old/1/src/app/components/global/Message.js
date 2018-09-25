import React from 'react';

export default class Message extends React.Component {
	render() {
		if (!this.props.showMessage) return null;

		return <div className="topMessage">{this.props.children}</div>;
	}
}
