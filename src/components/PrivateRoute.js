import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
} from 'react-router-dom';

/*const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => fakeAuth.isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);*/

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem('isAuth') ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location },
					}}
				/>
			)
		}
	/>
);
export default PrivateRoute;
