import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle'
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import regionList from './../config/region.js';

injectTapEventPlugin();

const styles = {
  customWidth: {
    width: 150,
  },
};

let provinceList = [];
let cityList = [];

// const Region = () => (
// 	<div>
// 		hello test
// 	</div>
// )

// export default Regoin
export default class Region extends Component {
	constructor(props) {
		super(props);
		this.state = {
			province: '',
			city: '',
			autoOK: false
		}
		regionList.forEach((item, index)  => {
			provinceList.push(<MenuItem key={index} value={item.id} primaryText={item.name}/>);
		})
	}

	getChildContext() {
		return {muiTheme: getMuiTheme(baseTheme)};
	}


	provinceChange(event, index, value) {
		this.setState({
			province: value,
			city: ''
		});
		cityList = [];
		regionList[index]["city"].forEach((item, index) => {
			cityList.push(<MenuItem key={index} value={item.id} primaryText={item.name} />);
		})
	}

	cityChange(event, index, value) {
		this.setState({
			city: value
		})
	}

	handleToggle(event, toggled) {
		this.setState({
			[event.target.value]: toggled
		});
	}

	render() {
		return(
			<div>
				<TextField hintText="hint text" />
				<Toggle 
					style={styles.customWidth}
					name="testToggle"
					value="autoOk"
					label="auto ok"
					toggled={this.state.autoOk}
					onToggle={(e, toggled)=>this.handleToggle(e, toggled)}
				/>
				<DatePicker 
					floatingLabelText="select date"
					autoOk={true}/>
				<SelectField
					value={this.state.province}
					floatingLabelText="Province"
					onChange={(event, index, value) => this.provinceChange(event, index, value)}
				>
					{provinceList}
				</SelectField>
				<SelectField
					value={this.state.city}
					floatingLabelText="City"
					style={{left:20}}
					onChange={(event, index, value) => this.cityChange(event, index, value)}
				>
					{cityList}
				</SelectField>
			</div>
		)
	}	
}

Region.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
}