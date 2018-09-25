import React from 'react';
import Header from '../components/global/Header';
import Aside from '../components/global/Aside';
import Footer from '../components/global/Footer';
import Modal from '../components/global/Modal';
import LoadingAnimation from '../components/global/LoadingAnimation';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true,
		};
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.setState({
			isOpen: false,
		});
	}

	render() {
		return (
			<div className="container">
				<Header />

				<div className="row marketing">
					{this.props.children}
					<Aside />
				</div>
				<Footer />
				<Modal
					show={this.state.isOpen}
					onClose={this.closeModal}
					modalTitle={'Welcome'}
				>
					<div className="input-group login">
						<h2>Welcome, Guest. It's React Blog</h2>
						<LoadingAnimation />
					</div>
				</Modal>
			</div>
		);
	}
}
