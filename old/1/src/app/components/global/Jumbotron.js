import React from 'react';
import Modal from './Modal';

export default class Jumbotron extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: false };
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		return (
			<div className="col-lg-12">
				<section className="jumbotron">
					<h1>Login</h1>
					<p className="lead">Please, login</p>
					<p>
						<button
							onClick={this.toggleModal}
							type="button"
							className="btn btn-success"
							role="button"
						>
							Login
						</button>
					</p>
					<Modal
						show={this.state.isOpen}
						onClose={this.toggleModal}
						modalTitle={'Login'}
					>
						<div className="input-group login">
							<input
								type="text"
								className="form-control login__textField"
								placeholder="Username"
							/>
							<input
								type="password"
								className="form-control login__textField"
								placeholder="Password"
							/>
							<div className="btn-group" role="group" aria-label="...">
								<button
									type="button"
									id="login__button"
									className="btn btn-success"
								>
									OK
								</button>
							</div>
						</div>
					</Modal>
				</section>
			</div>
		);
	}
}
