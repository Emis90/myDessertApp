import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet
} from 'react-native'
import Login from '../components/Login'


export default class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
    }
  }


  render() {
    return(
      <View style={styles.container}>

      {
       this.state.isLoggedIn
       ?
       <View>
         <Text style={styles.text}>Welcome to your page</Text>
         <TouchableOpacity style={styles.buttonContainer}>
         <Text style={styles.buttonText} onPress={()=>{this.state.isLoggedIn = false}}>Log Out</Text>
         </TouchableOpacity>
       </View>
       :
       <View style={styles.formContainer}>
       <Image source={require('../assets/images/gelatoLogo.png')} style={styles.image}/>

       <Login />
       </View>
      }


      </View>

    )
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
  image: {
    width: 162,
    height: 135,
    alignSelf: "center"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  }

})
