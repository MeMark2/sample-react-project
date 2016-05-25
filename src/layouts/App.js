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
            <div className='container-fluid'>
              <div className='row'>
                <div className='app__logoContainer col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8'>
                  <img className='app__logo' 
                    src='https://d2yvv6a7kcdl71.cloudfront.net/56d0cdac085677b4173a8df1/assets/0279DDF5-A6B2-4249-819F-83196B49E823.png'/>
                </div>
              </div>
            </div>
            {this.props.children}
          </div>
        </Provider>
      )
  }
})