import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginTop: 10,
    fontWeight: "bold",
    width: 150,
    textAlign: "center"
  },
  input: {
    textAlign: "center",
    width: 200,
    height: 70,
    backgroundColor: "#5E9ACC",
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 10,
    fontWeight: "700",
  },
  buttonContainer: {
    width: 200,
    height: 70,
    backgroundColor: "#1088EB",
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: "center",
    color: 'white',
    marginTop: 20,
    paddingVertical: 5,
    fontWeight: "700",
  },
  containerHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada'
  },
  button: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  buttonContainer: {
    paddingRight: 5
  }

})

export default styles
