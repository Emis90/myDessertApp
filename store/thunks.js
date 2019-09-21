import {
  logInUser,
  logOutUser,
  profilePage,
  signInOrUpPage
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
      console.log('NOT logged in from userIn think ', error)
    }
  }

}

export const goToProfile = () => async => dispatch => {
  try {
    dispatch(profilePage())
  } catch (error) {
    console.log('did NOT navigate to profile ', error)
  }
}

export const gotToSignInOrSignUp = () => async => dispatch => {
  try {
    dispatch(signInOrUpPage())
  } catch (error) {
    console.log('did NOT navidate to signIn page')
  }
}
