import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  headerContainer: {
    flex: 0.1,
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
  },
  headerText: {
    flex: 0.7,
    fontSize: 32,
    textAlign: "left",
    alignItems: "center",
    padding: 10
  },
  headerButtons: {
    flex: 0.3,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center"
  },
  bodyContainer: {
    flex: 0.8,
    width: "100%",
    justifyContent: "flex-start"
  },
  imageContainer: {
    flex: 1, //here you can use flex:1 also
    aspectRatio: 1,
    backgroundColor: "yellow"
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  footerContainer: {
    flex: 0.2,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  buttonGroupContainer:{
    // flexDirection: 'column',
    flex: 0.8,
    width: '90%',
    borderColor: '#4189D6'
  },
});