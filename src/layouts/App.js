import React from 'react'
import Login from './Login';
import Selector from './Selector';
import Nav from '../containers/Nav'
import { Provider } from 'react-redux'
import rootReducer from '../store/rootReducer'
import { createStore } from 'redux'

const store = createStore(rootReducer)

export default React.createClass({
  render() {
    // Here we will return the appropriate layout based on the login state of the account
    let layout = null
    if (store.getState().account.loggedIn) {
      layout = (<Selector/>)
    }
    else {
      layout = (<Login/>)
    }

    return (
        <Provider store={store}>
          <div>
            <Nav/>
            {this.props.children}
            {layout}
          </div>
        </Provider>
      )
  }
})