import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from "./layouts/App"
import About from "./layouts/About"

export default React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
		    <Route path="/" component={App}/>
		    <Route path="/about" component={About}/>
		  </Router>
      )
  }
})