/*
  This is the account reducer.
  The account element of the store contains an email, name and profile picture.
*/

import { ACCOUNT_EDIT_EMAIL, ACCOUNT_EDIT_NAME, ACCOUNT_EDIT_PROFILE_PICTURE, ACCOUNT_CLEAR } from '../actions/actionTypes'

const initialState = {
    email: null,
    name: null,
    profilePicture: null,
    loggedIn: false
  }

export default function account(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_EDIT_EMAIL:
      return Object.assign({}, state, { email: action.email })

    case ACCOUNT_EDIT_NAME:
      return Object.assign({}, state, { name: action.name })

    case ACCOUNT_EDIT_PROFILE_PICTURE:
      return Object.assign({}, state, { profilePicture: action.profilePicture })

    case ACCOUNT_CLEAR:
      return initialState

    default:
      return state
  }
}
