import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Post from '../components/Post'
import {
  // Image,
  // Platform,
  ScrollView,
  StyleSheet,
  Text,
  // StatusBar,
  View,
  Button
} from 'react-native';
import { tsConstructorType } from '@babel/types';
import { FirebaseWrapper } from '../firebase/firebase';//getting posts from database
import MyMap from './Map';

// import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }

  }

  async componentDidMount () {
    await FirebaseWrapper.GetInstance().SetupCollectionListener('post', (posts) =>
      this.setState({
         posts
        })
    )
  }

  async removePost(id) {
    await FirebaseWrapper.GetInstance().deleteFile(id)
  }

  render() {
    let isLoggedIn = false;

    return (
<View style={Style.container}>
    <ScrollView>
    <Text style={Style.getStartedText}>Places to check out: </Text>
    {
      this.state.posts && this.state.posts.map(
        post => <View key={post.id}>
        <Post postInfo={post} />
        <Button title="remove" onPress={()=> this.removePost(post.id)}/>
        </View>)

    }
    </ScrollView>
</View>
    )
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
  },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { width: 0, height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     }
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // navigationFilename: {
  //   marginTop: 5,
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },
});