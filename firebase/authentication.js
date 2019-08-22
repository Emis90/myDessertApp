
import * as firebase from 'firebase'

export const signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error) => console.log('didnt create >>',error))
}

export const creteUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error)=> console.log('didnt create >>',error))
}
