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
// import { createUser, signInUser }  from '../firebase/authentication'
import { userIn, userOut } from "../store/thunks"
import { Provider, connect } from "react-redux"
import store from '../store/index'
// import {GoogleSignin} from "react-native-google-signin"
import * as firebase from "firebase"



export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  createUser = (email, password) => {
     firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.log("not created", err));
  };

  logIn = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => console.log("not signed in", err));
      let user = firebase.auth().currentUser
      if (user) {
        console.log('user from login function',user)
        this.props.userIn()
        return this.setState({
          email: "",
          password: ""
        });
      }
    } catch (err) {
      console.log("something wrong component login", err);
    }
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

      <TouchableOpacity style={styles.input}>
        <Text style={styles.buttonText} onPress={()=>{
          this.logIn(this.state.email, this.state.password)
          }}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text style={styles.buttonText} onPress={()=>{
          this.createUser(this.state.email, this.state.password)
          this.logIn(this.state.email, this.state.password)
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
    textAlign: "center",
    width: 200,
    height: 70,
    backgroundColor: "#5E9ACC",
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 10,
    fontWeight: "700",
  },
  buttonContainer: {
    width: 200,
    height: 70,
    backgroundColor: "#1088EB",
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: "center",
    color: 'white',
    marginTop: 20,
    paddingVertical: 5,
    fontWeight: "700",
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
