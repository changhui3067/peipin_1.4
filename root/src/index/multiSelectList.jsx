import React, {Component} from 'react';
import {List, ListItem, FlatButton} from 'material-ui';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/*
 * props: itemList
 */
export default class MultiSelectList extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return {muiTheme: getMuiTheme(baseTheme)};
	}

	handleItemClick(event, index, value) {
		console.log('click');
	}

	render() {
		const listItems = this.props.itemList.map((item, index) => 
				<FlatButton 
					label={item.value}
					key={index}
					onClick={this.handleItemClick.bind(this)} />
			)
		return(
			<div>
					{listItems}
			</div>
		)
	}

}

MultiSelectList.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
}