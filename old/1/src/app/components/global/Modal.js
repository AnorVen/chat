import React from 'react';

export default class Modal extends React.Component {
	render() {
		if (!this.props.show) {
			return null;
		}

		return (
			<div className="backdrop">
				<div className="LoginModal">
					<div className="login__header">
						<button className="close" onClick={this.props.onClose}>
							X
						</button>
						<h4 className="modal-title" id="mySmallModalLabel">
							{this.props.modalTitle}
						</h4>
					</div>
					{this.props.children}
				</div>
			</div>
		);
	}
}
