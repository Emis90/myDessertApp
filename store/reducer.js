import {
  LOG_IN,
  LOG_OUT,
  // PROFILE,
  // SIGN_IN_OR_UP
} from './actions'


let initialState = {
  loggedIn: true,
  page: "logInOrSignUp"
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
     return {...state, loggedIn: true, page: "profile"}
    case LOG_OUT:
       return {...state, loggedIn: false, page: "logInOrSignUp"}
    // case PROFILE:
    //    return {...state, page: "profile"}
    // case SIGN_IN_OR_UP:
    //    return {...state, page: "logInOrSignUp"}
    default:
     return state
  }
}
