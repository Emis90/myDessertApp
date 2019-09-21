import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native'
import { createUser, signInUser, googleLogin }  from '../firebase/authentication'
import { userIn, userOut } from "../store/thunks"
import { Provider, connect } from "react-redux"
import store from '../store/index'
// import {GoogleSignin} from "react-native-google-signin"




export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

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

signUp = () => {
  createUser(this.state.email, this.state.password)
}
signIn = () => {
  signInUser(this.state.email, this.state.password)
}

  render() {

    return(
      <Provider store={store}>
      <KeyboardAvoidingView>
      <View style={styles.container}>
      <Text style={styles.buttonText}>Sign up to discover places</Text>
      <StatusBar barStyle="light-content"/>
      <TextInput
        style={styles.input}
        placeholder="email"
        placeholderTextColor="white"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(email)=> {this.setState({ email })}}
        value={this.state.email}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="white"
        secureTextEntry={true}
        returnKeyType="go"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(password)=> {this.setState({ password })}}
        value={this.state.password}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={()=>{
          this.signIn()
          this.props.userIn()
          }}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.buttonText}>OR</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={()=>{
          this.signUp()
          this.props.userIn()
          }}>Sign Up</Text>
      </TouchableOpacity>

      </View>
      </KeyboardAvoidingView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginTop: 10,
    fontWeight: "bold",
    width: 150,
    textAlign: "center"
  },
  input: {
    height: 40,
    width: 260,
    backgroundColor: "#5E9ACC",
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#1088EB",
    paddingVertical: 15
  },
  buttonText: {
    color: 'white',
    textAlign: "center",
    paddingVertical: 5,
    fontWeight: "700"
  }

})


const mapState= (state) => ({
  loggedIn: state.loggedIn,
  page: state.page
})

const mapDispatch = (dispatch) => ({
   userIn: ()=> dispatch(userIn()),
   userOut: ()=> dispatch(userOut()),
})


module.exports = connect(mapState, mapDispatch)(Login)
