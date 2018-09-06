import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JumbotronText from '../components/Blog/Main/Jumbotron';
import Subheading from '../components/Blog/Main/Subheading';

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
