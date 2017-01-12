import React, {Component} from 'react';
import {List, ListItem} from 'material-ui';
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

	render() {
		const listItems = this.props.itemList.map((item, index) => 
				<ListItem
					value={item.value} 
					primaryText={item.value} 
					key={index} 
					style={{float: 'left', display: 'inline-block'}}/>
			)
		return(
			<div>
				<List style={{width: '100px'}}>
					{listItems}
				</List>
			</div>
		)
	}

}

MultiSelectList.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
}