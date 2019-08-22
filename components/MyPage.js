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



export default function MyProfile(props) {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5FB3F9",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    textAlign: "center"
  }
})
