import {
  logInUser,
  logOutUser,
  // profilePage,
  // signInOrUpPage
} from "./actions"



export function userIn(){
  return async dispatch => {
    try {
      dispatch(logInUser())
    } catch (error) {
      console.log('NOT logged in from userIn think ', error)
    }
  }

}

export function userOut(){
  return async dispatch => {
    try {
      dispatch(logOutUser())
    } catch (error) {
      console.log('NOT logged in from userIn thunk ', error)
    }
  }

}


