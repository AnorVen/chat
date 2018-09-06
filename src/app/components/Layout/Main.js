import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JumbotronText from './Jumbotron';
import Subheading from './Subheading';

class Main extends Component {
	render() {
		return (
			<Row>
				<JumbotronText />
				<Subheading />
			</Row>
		);
	}
}

export default Main;
