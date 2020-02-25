import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';//getting posts from database
import { Provider, connect } from 'react-redux'
import store from '../store/index'
import * as firebase from "firebase"


export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }

  }

  async componentDidMount () {
    let user = firebase.auth().currentUser
    let userId = user.uid
    let response = await FirebaseWrapper.GetInstance().SetUpCollectionListener(userId)
      this.setState({
        posts: response.post
      })
  }

  async removePost() {
    try {
      let user = firebase.auth().currentUser
      let userId = user.uid
      await FirebaseWrapper.GetInstance().deleteFile(userId)
      this.setState ({posts: []})
    } catch (error) {
      console.log('did not delete post > eroor: ', error)
    }

  }



  render() {

  if (this.props.loggedIn === true) {
    return (
      <Provider store={store}>
       <View style={Style.container}>
       <ScrollView>
       <Text style={Style.getStartedText}>Places ive been to: </Text>
       {
         this.state.posts.map((post, i)=>
          (<View key={i}>
                      <Text style={Style.getStartedText}>{post.venue}</Text>

                 </View>)
                 )

       }
       <View>
       {(this.state.posts.length !== 0) ? <Button title="delete collection" onPress={()=> this.removePost()}/>
       : <Text style={{color: "white"}}>add to your collection from the map</Text>}
       </View>
       </ScrollView>
       </View>
       </Provider>
    )
  } else {
    return (
      <View style={Style.container}>
      <Text style={Style.getStartedText}>Log in to see your list</Text>
    </View>
    )
  }
 }
}

HomeScreen.navigationOptions = {
  header: null,
};


//this only renders when in dev mode
function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={Style.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={Style.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={Style.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5FB3F9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: "bold",
    paddingTop: 10
  }
});

const mapState= (state) => ({
  loggedIn: state.loggedIn
})
module.exports = connect(mapState, null)(HomeScreen)
