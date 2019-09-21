import * as firebase from 'firebase'


export const signInUser = (email, password) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch((error) => console.log('didnt sign in >>', error));
};

export const createUser = (email, password) => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.catch((error) => console.log('didnt create >>', error));
};

export const signOutUser = () => {
	firebase
		.auth()
		.signOut()
		.catch((error) => {
			console.log("didnt sign out >> ", error)
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

