export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const SIGN_IN_OR_UP = "SIGN_IN_OR_UP"
export const PROFILE = "PROFILE"


export const logInUser = () => {
  return {
    type: LOG_IN
  }
}


export const logOutUser = () => {
  return {
    type: LOG_OUT
  }
}

export const profilePage = () => {
  return {
    type: PROFILE
  }
}

export const signInOrUpPage = () => {
  return {
    type: SIGN_IN_OR_UP
  }
}
