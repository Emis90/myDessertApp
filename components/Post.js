import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native'

import { FirebaseWrapper } from '../firebase/firebase';
import { whileStatement } from '@babel/types';




export default function Post(props) {

  return (
    <View style={postStyle.container}>

         <View style={postStyle.dateUserContainer}>
        </View>
        <View style={postStyle.postContainer}>
        <Text style={postStyle.postText}>{props.postInfo.text}</Text>
        </View>
      </View>
  )
}


const postStyle = StyleSheet.create ({
  container: {
    flex: 1,
    borderBottomColor: "#5FB3F9",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateUserContainer: {
    marginLeft: 3
  },
  postText: {
    padding: 5,
    fontSize: 15,
    color: "white",
    fontWeight: "bold"
  }
})
