import React from 'react';
import SideMenu from './SideMenu';

export default class Aside extends React.Component {
	render() {
		return (
			<aside className="col-lg-4 right-col">
				<div className="panel panel-default">
					<div className="panel-body">
						<SideMenu />
					</div>
				</div>
			</aside>
		);
	}
}
