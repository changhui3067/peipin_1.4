import React, {Component} from 'react';
import {SelectField, MenuItem} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import regionList from './../config/region.js';

let provinceList = [];
let cityList = [];

/*
 * props: provinceClickCallback
 *				cityClickCallback
 */
export default class Region extends Component {
	constructor(props) {
		super(props);
		this.state = {
			province: '',
			city: ''
		}
		this.generateProvinceList();
	}

	getChildContext() {
		return {muiTheme: getMuiTheme(baseTheme)};
	}

	provinceChange(event, index, value) {
		this.setState({
			province: value,
			city: ''
		});
		this.generateCityList(index);
		this.props.provinceClickCallback.call(this, event, index, value)
	}

	cityChange(event, index, value) {
		this.setState({
			city: value
		});
		this.props.cityClickCallback.call(this, event, index, value)
	}

	render() {
		return(
			<div>
				<SelectField
					value={this.state.province}
					onChange={this.provinceChange.bind(this)}
					style={{float: 'left'}}
				>
					{provinceList}
				</SelectField>
				<SelectField
					value={this.state.city}
					style={{left:20, float: 'left'}}
					onChange={this.cityChange.bind(this)}
				>
					{cityList}
				</SelectField>
			</div>
		)
	}	

	generateProvinceList() {
		regionList.forEach((item, index)  => {
			provinceList.push(<MenuItem key={index} value={item.id} primaryText={item.name}/>);
		})
	}

	generateCityList(cityIndex) {
		cityList = [];
		regionList[cityIndex]["city"].forEach((item, index) => {
			cityList.push(<MenuItem key={index} value={item.id} primaryText={item.name} />);
		})
	}
}

Region.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
}