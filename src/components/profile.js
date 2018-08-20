import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const profile = () => (
	<div>
		<p>Вася</p>
		<Link to="/">главная</Link>
	</div>
);

export default profile;
