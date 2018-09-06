import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Media } from 'reactstrap';

class Subheading extends Component {
	render() {
		return (
			<Row>
				<Media>
					<Media left>
						<Media
							object
							src="http://via.placeholder.com/350x150"
							alt="Generic placeholder image"
						/>
					</Media>
					<Media body>
						<Media heading>Media heading</Media>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
						scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
						in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
						nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					</Media>
				</Media>
			</Row>
		);
	}
}

export default Subheading;
