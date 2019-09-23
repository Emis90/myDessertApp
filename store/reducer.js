import {
  LOG_IN,
  LOG_OUT,
} from './actions'


let initialState = {
  loggedIn: false,
  page: "logInOrSignUp"
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
     return {...state, loggedIn: true, page: "profile"}
    case LOG_OUT:
       return {...state, loggedIn: false, page: "logInOrSignUp"}
    default:
     return state
  }
}
