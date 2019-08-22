import React, { Component } from 'react';
import { Modal, TextInput, View, TouchableHighlight, Image, StyleSheet, Button } from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';

export class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }



  async createPost() {
    try {
      await FirebaseWrapper.GetInstance().CreateNewDocument('myInfo', {text: this.state.text})
    } catch (error) {
      console.log('something went wrong posting >>', error)
    }

    // make call to Firebase
  }

  render() {
    return (
      <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible} >
        <View style={{ marginTop: 25 }}>
          <TouchableHighlight
            onPress={() => {
              this.props.closeModal()
            }}>
            <Image
              source={{ uri: 'https://cdn4.iconfinder.com/data/icons/media-controls-4/100/close-512.png' }}
              style={styles.close}
            />
          </TouchableHighlight>
        <View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => this.setState({ text })}
            placeholder="Type a place you want to check out..."
            value={this.state.text}
            style={styles.input}
          />
        </View>
        </View>

        <Button title="Add sweet activity" style={styles.button} onPress={() => this.createPost()}/>
      </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 80,
    color: 'blue',
    fontWeight: "bold"
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  button: {
    height: 20,
    width: 50,
    borderRadius: 20,
    backgroundColor: 'blue',
    color: 'white'
  }
})
