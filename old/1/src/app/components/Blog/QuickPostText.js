import React from 'react';

export default class QuickPostText extends React.Component {
	render() {
		if (!this.props.show) return null;

		return <div className="panel-body">{this.props.text}</div>;
	}
}
