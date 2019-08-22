// import React from 'react';
// import {
//   Text,
//   View,
//   Image,
//   Button,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   StatusBar
// } from 'react-native'
// import {firebaseWrappeer, FirebaseWrapper} from '../firebase/firebase'



// export default class SignUp extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       username: '',
//       email: '',
//       password: ''
//     }
//   }

// async createProfile() {
//   try {
//     await FirebaseWrapper.GetInstance().CreateNewDocument('user', {text: this.state})
//   } catch (error) {
//     console.log('something went wrong creating a profile >> ', error)
//   }
// }


//   render() {
//     return(
//       <KeyboardAvoidingView>

//       <View style={styles.container}>
//       <StatusBar barStyle="light-content"/>

//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         placeholderTextColor="white"
//         returnKeyType="next"
//         autoCapitalize="words"
//         autoCorrect={false}
//         // onChange={}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="email"
//         placeholderTextColor="white"
//         returnKeyType="next"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="password"
//         placeholderTextColor="white"
//         secureTextEntry={true}
//         returnKeyType="go"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />

//       <TouchableOpacity style={styles.buttonContainer}>
//         <Text style={styles.buttonText}>SignUp</Text>
//       </TouchableOpacity>
//       </View>
//       </KeyboardAvoidingView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20
//   },
//   text: {
//     color: 'white',
//     marginTop: 10,
//     fontWeight: "bold",
//     width: 150,
//     textAlign: "center"
//   },
//   input: {
//     height: 40,
//     width: 260,
//     backgroundColor: "#5E9ACC",
//     marginBottom: 20,
//     color: "white",
//     paddingHorizontal: 10
//   },
//   buttonContainer: {
//     backgroundColor: "#1088EB",
//     paddingVertical: 15
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: "center",
//     paddingVertical: 5,
//     fontWeight: "700"
//   }

// })
