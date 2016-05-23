/*
	Here we combine all store reducers into one reducer for the whole store.
*/
import { combineReducers } from 'redux'
import account from './reducers/account'

const rootReducer = combineReducers({
  account
})

export default rootReducer