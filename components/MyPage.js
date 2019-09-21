// import React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity
// } from 'react-native'
// import { userIn, userOut } from "../store/thunks"
// import { Provider, connect } from "react-redux"
// import store from "../store/index"
// import signOutUser from '../firebase/authentication'


// class MyPage extends React.Component{

//   signOut = () => {
//     signOutUser()
//   }

//   render() {
//       return(
//         <Provider store={store}>
//         <View style={styles.container}>
//           <Text style={styles.text}>Welcome to your page</Text>
//           <TouchableOpacity style={styles.buttonContainer}>
//           <Text style={styles.buttonText} onPress={()=>{
//             this.signOut()
//             this.props.userOut()
//             }}>Sing Out</Text>
//         </TouchableOpacity>
//         </View>
//         </Provider>
//       )
//     }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#5FB3F9",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   text: {
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   buttonContainer: {
//     backgroundColor: "#1088EB",
//     paddingVertical: 15
//   }
// })

// const mapState= () => ({
//   loggedIn: state.loggedIn,
//   page: state.page
// })

// const mapDispatch = () => ({
//    userIn: ()=> dispatch(userIn()),
//    userOut: ()=> dispatch(userOut()),
// })

// module.exports = connect(mapState,mapDispatch)
