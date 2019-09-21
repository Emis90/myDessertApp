import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
  } from 'react-native'
import Login from '../components/Login'
import { userIn, userOut } from "../store/thunks"
import { connect, Provider } from "react-redux"
import store from '../store/index'
import { signOutUser } from '../firebase/authentication'
import * as firebase from "firebase"



class Profile extends React.Component {
  constructor() {
    super()
  }
  signOut = () => {
    signOutUser()
  }

  render() {
    let user = firebase.auth().currentUser;
    if (this.props.loggedIn === true) {
      console.log("current user   ", user)
        return(
          <Provider store={store}>
          <View style={styles.container}>
            <Text style={styles.text}>Welcome to your page</Text>
            <TouchableOpacity style={styles.buttonText}>
            <Text style={styles.buttonText} onPress={()=>{
              this.signOut()
              this.props.userOut()
              }}>Sing Out</Text>
          </TouchableOpacity>
          </View>
          </Provider>
        )

    } else {
      console.log('no used logged in >>')
      return <Login />
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5FB3F9",
    justifyContent: "center",
    alignItems: "center"
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

module.exports = connect(mapState, mapDispatch)(Profile)


