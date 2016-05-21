import React from 'react'
import Login from './Login';
import Selector from './Selector';

export default React.createClass({
  render() {
    // Here we will return the appropriate layout based on the state of the app
    let layout = (<div>blah</div>)
    if (true) {
      layout = (<Login/>)
    }
    else {
      layout = (<Selector/>)
    }
    return layout
  }
})