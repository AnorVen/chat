import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<hr />
							{this.props.children}
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
