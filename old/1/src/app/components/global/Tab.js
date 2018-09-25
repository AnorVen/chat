import React from 'react';
import News from '../Main/News';
import NewestPosts from '../Blog/NewestPosts';

// Пока убрал из приложения
export default class Tab extends React.Component {
	render() {
		if (this.props.activeTab === 0) return <NewestPosts />;
		else if (this.props.activeTab === 1) return <News />;
		else return null;
	}
}
