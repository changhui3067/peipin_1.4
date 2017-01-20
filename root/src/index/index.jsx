let ReactDOM = require('react-dom');
import React, {Component} from 'react';
import {cyan500, cyan700, grey400, grey100, grey500, grey300, darkBlack, pinkA200, white, fullBlack, lime400} from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';
import {fade} from 'material-ui/utils/colorManipulator';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {AppBar} from 'material-ui'
import Region from './region.jsx';
import MultiSelectList from './MultiSelectList';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
	spacing: spacing,
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: lime400,//darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
	}
});

const Index = React.createClass({

	testClick: function(event, index, value) {
		console.log(index + ': ' + value)
	},

  render() {
  	let itemList = [{
  		'value': 'item 1'
  	},{
  		'value': 'item 2'
  	},{
  		'value': 'item 3'
  	}];
    return (
    	<MuiThemeProvider muiTheme={muiTheme}>
    	
      <div>Hello World!
      	<Region provinceClickCallback={this.testClick} cityClickCallback={this.testClick}></Region>
      	<MultiSelectList itemList={itemList}></MultiSelectList>
      </div>
      </MuiThemeProvider>
    );
  }
});

ReactDOM.render(<Index />, document.getElementById("container"));
