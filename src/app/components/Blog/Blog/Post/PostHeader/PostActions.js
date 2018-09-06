import React, { Component } from 'react';

export default class PostActions extends Component {
	render() {
		return (
			<div className="ui_actions_menu_wrap _ui_menu_wrap ">
				<div className="ui_actions_menu_icons">
					<span className="blind_label">Действия</span>
				</div>
				<div className="ui_actions_menu _ui_menu">
					<a className="ui_actions_menu_item">Это не интересно</a>
					<a className="ui_actions_menu_item page_action_subscribe">
						Уведомлять о записях
					</a>
					<a className="ui_actions_menu_item">Пожаловаться</a>
				</div>
			</div>
		);
	}
}
