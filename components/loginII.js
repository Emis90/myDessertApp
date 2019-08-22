import React from "react"
import { View, Text, Stylesheet } from "react-native"
import { ExpoLinksView } from "@expo/samples"


export default class LinksScreen extends React.Component {
  static navigationOtions = {
    title: "Links"
  }


  render() {
    render(
      <View style={styles.container}>
        <Text>Login screen</Text>
      </View>
    )
  }
}

const styles = Stylesheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "white"
  }
})
