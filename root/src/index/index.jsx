let ReactDOM = require('react-dom');
import React, {Component} from 'react';
import Region from './region.jsx';
import MultiSelectList from './MultiSelectList';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

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
      <div>Hello World!
      	<Region provinceClickCallback={this.testClick} cityClickCallback={this.testClick}></Region>
      	<MultiSelectList itemList={itemList}></MultiSelectList>
      </div>

    );
  }
});

ReactDOM.render(<Index />, document.getElementById("container"));
