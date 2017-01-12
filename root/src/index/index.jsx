let React = require('react');
let ReactDOM = require('react-dom');
import Region from './region';

const Index = React.createClass({
  render() {
    return (
      <div>Hello World!
      	<Region></Region>
      </div>

    );
  }
});

ReactDOM.render(<Index />, document.getElementById("container"));
