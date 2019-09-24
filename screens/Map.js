import React, { Component } from "react";
import { FirebaseWrapper } from '../firebase/firebase';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from "react-native";
// import * as places from '../data/place.json'
import places from '../data/places'
import MapView, { Marker, Callout } from "react-native-maps";
import * as firebase from "firebase"

export default class MyMap extends Component {
  constructor() {
    super()
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null
    }
  }


  async createPost(place, userId) {
    try {
      await FirebaseWrapper.GetInstance().CreateNewDocument(
      'post',
      {
        venue: place.name, address: place.location.address, id: place.id
      },
       userId)
    } catch (error) {
      console.log('something went wrong posting >>', error)
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        })
      },
      error => this.setState({error: error.message }),
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 2000}
    )
  }


  render() {
    let user = firebase.auth().currentUser
    return (
      <View style={styles.container}>

      <MapView style={styles.mapContainer} initialRegion={{
        latitude: 40.730680,
        longitude: -73.9990,
        latitudeDelta: 0.1502,
        longitudeDelta: 0.1521,
      }}>

      {places.venues.map((place) => {
         return (

        <MapView.Marker

         key={place.name}
         coordinate={{latitude: place.location.lat, longitude: place.location.lng}}>
         <Image source={require('../assets/images/gelatoCone.png')} style={{width: 20, height: 60}} />
         <Callout style={{width: 200, height: 80}} onPress={()=> this.createPost(place, user.uid)}>
         <Text style={{color: "#5FB3F9",fontWeight: "bold", textAlign: "center"}}>{place.name}</Text>

         <Text style={{color: "#5FB3F9", textAlign: "center"}}>{place.location.address}</Text>


         <Button title="ADD" onPress={()=> alert({message: 'added'})} style={{color: "#5FB3F9",fontWeight: "bold", textAlign: "center"}}/>
         </Callout>

         </MapView.Marker>

         )
         })}
      </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    width: 400,
    height: 700,
    justifyContent: "center"
  },
  singleItemContainer: {
    flex: 1,
    flexDirection: "row"
  }
})
