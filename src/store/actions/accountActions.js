/*
  Here we create all actions that the account reducer can handle.
*/
import { ACCOUNT_EDIT_EMAIL, ACCOUNT_EDIT_NAME, ACCOUNT_EDIT_PROFILE_PICTURE, ACCOUNT_CLEAR } from '../actions/actionTypes'

export function editEmail(email) {
  return { type: ACCOUNT_EDIT_EMAIL, email }
}

export function editName(name) {
  return { type: ACCOUNT_EDIT_NAME, name }
}

export function editProfilePicture(profilePicture) {
  return { type: ACCOUNT_EDIT_PROFILE_PICTURE, profilePicture }
}

export function accountClear() {
  return { type: ACCOUNT_CLEAR }
}
