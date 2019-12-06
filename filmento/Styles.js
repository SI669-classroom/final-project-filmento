import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerContainer: {
    flex: 0.1,
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
    borderBottomColor:'transparent',
    borderTopColor:'transparent',
  },
  headerText: {
    flex: 0.7,
    fontSize: 32,
    textAlign: "left",
    alignItems: "center",
    padding: 10,
    marginTop: 4,
  },
  friendCollectionHeaderText: {
    flex: 0.7,
    fontSize: 18,
    textAlign: "left",
    alignItems: "center",
    padding: 10,
    marginTop: 14,
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
    justifyContent: 'space-between'
  },
  infoImageContainer: {
    flex: 0.6, //here you can use flex:1 also
    aspectRatio: 1,
    //backgroundColor: "yellow",
    alignItems: 'center',
    alignSelf: 'center',
  },
  movieInfoContainer: {
    // marginTop: 10,
    flex: 0.8,
    width: "100%",
  },
  detailTitle:{
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 5,
  },
  detailText:{
    fontSize: 16,
    textAlign: 'left',
    margin: 5,
  },
  imageContainer: {
    flex: 1, //here you can use flex:1 also
    aspectRatio: 1,
    backgroundColor: "white",
    margin:16,
    overflow:'hidden',
    height:270,
    width:180,
    justifyContent:'center',
    borderRadius: 10,
  },
  imageStyle: {
    width: "120%",
    height: "120%",
    alignSelf: "center",
    resizeMode:'cover',
    
  },
  footerContainer: {
    flex: 0.1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingTop: 12
  },
  buttonGroupContainer:{
    flex: 0.8,
    width: '90%',
    borderColor: 'gray'
  },
  buttonGroupStyle:{
    backgroundColor: 'white'
  },
  buttonGroupText:{
    //color: '#b8b8b8',
    color: 'black'
  },
  buttonGroupSelected:{
    backgroundColor: 'gray'
  },
  buttonGroupSelectedText:{
    color: 'white'
  },
  posterContianer:{
    flex:1,
    shadowColor:'#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    alignItems:'center'
  },
  searchBar:{
  backgroundColor:'transparent',
  borderBottomColor:'transparent',
  borderTopColor:'transparent',
  }
});

