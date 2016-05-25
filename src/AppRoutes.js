import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from "./layouts/App"
import About from "./layouts/About"
import Login from "./layouts/Login"

export default React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Login}/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
      )
  }
})