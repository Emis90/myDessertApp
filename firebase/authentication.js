import * as firebase from 'firebase'
import 'firebase/firestore'

export const createUser = async(email, password) => {
	await firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(()=> console.log('user created!'))
		.catch((error) => console.log('did NOT create >>', error));
};

export const signInUser = async(email, password) => {
	await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(()=> console.log('user signed in!'))
		.catch((error) => console.log('did NOT sign in >>', error));
};

export const signOutUser = async() => {
	await firebase
		.auth()
		.signOut()
		.then(()=> console.log('user signed out!'))
		.catch((error) => {
			console.log("dit NOT sign out >> ", error)
		});
};

// export const googleLogin = () => {
// 	let provider = new firebase.auth.GoogleAuthProvider()
// 	firebase.auth()
// 					.signInWithPopup(provider)
// 					.then(result => {
// 						console.log(result.user)
// 					})
// 					.catch(error => {
// 						console.log('did NOT sign in with Google >>', error)
// 					})
// }

// signInWithGoogle = () => {
//   // googleLogin()
//   // GoogleSignin
//   .signIn()
//   .then(data => {
//     const credentials = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
//     return firebase.auth().signInWithCredential(credentials)
//   })
//   .then(user => console.log(user))
//   .catch(err => console.log('not logged in >>', err))
// }

