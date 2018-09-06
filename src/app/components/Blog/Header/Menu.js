import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	isActive = href => (href === window.location.pathname ? 'active' : '');

	BreadcrumbText() {
		for (let i = 0; i < this.props.menuItems.length; i++) {
			if (this.props.menuItems[i].menuhref !== '/') {
				if (this.props.menuItems[i].menuhref === window.location.pathname) {
					return this.props.menuItems[i].menutitle;
				}
			}
		}
	}

	render() {
		let renderMenuItem = this.props.menuItems.map((item, key) => (
			<MenuItem href={item.menuhref} key={key} isActive={this.isActive}>
				<Link to={item.menuhref}>{item.menutitle}</Link>
			</MenuItem>
		));
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						{this.props.brand}
					</Link>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav">{renderMenuItem}</ul>
				</div>
				<div>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active> {this.BreadcrumbText()}</BreadcrumbItem>
					</Breadcrumb>
				</div>
			</nav>
		);
	}
}
