import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native'
import {createUser, signInUser}  from '../firebase/authentication'


export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

signUp = () => {
  createUser(this.state.email, this.state.password)
}
signIn = () => {
  signInUser (this.state.email, this.state.password)
}

  render() {
    console.log(this.state)
    return(

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
        <Text style={styles.buttonText} onPress={()=>{this.signIn()}}>Sing In</Text>
      </TouchableOpacity>
      <Text style={styles.buttonText}>OR</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={()=>{this.signUp()}}>Sign Up</Text>
      </TouchableOpacity>
      </View>

      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
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
