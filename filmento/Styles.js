import { StyleSheet, Dimensions } from "react-native";

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
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  headerText: {
    flex: 0.7,
    fontSize: 32,
    textAlign: "left",
    alignItems: "center",
    padding: 10,
    marginTop: 4
  },
  MainTabsTopBlankSpace: {
    flex: 0.1,
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  friendPagesPersonalHeaderContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    paddingTop: 35
  },
  friendPagesPersonalHeaderContent: {
    flex: 0.22,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    flexDirection: "column",
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  friendCollectionHeaderText: {
    flex: 0.7,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 14
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
    justifyContent: "space-between"
  },
  movieInfoContainer: {
    marginTop: 10,
    flex: 0.4,
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: 'yellow'
  },
  imageContainer: {
    flex: 1, //here you can use flex:1 also
    //aspectRatio: 1,
    backgroundColor: "white",
    margin: 16,
    overflow: "hidden",
    height: 270,
    width: 180,
    justifyContent: "center",
    borderRadius: 10
  },
  imageStyle: {
    width: "125%",
    height: "125%",
    alignSelf: "center",
    resizeMode: "cover"
  },
  footerContainer: {
    flex: 0.1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingTop: 12
  },
  buttonGroupContainer: {
    flex: 0.8,
    width: "90%",
    borderColor: "gray"
  },
  buttonGroupStyle: {
    backgroundColor: "white"
  },
  buttonGroupText: {
    //color: '#b8b8b8',
    color: "black"
  },
  buttonGroupSelected: {
    backgroundColor: "gray"
  },
  buttonGroupSelectedText: {
    color: "white"
  },
  posterContianer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,

    alignItems: "center"
  },
  flatlistColumn: {
    borderColor: "transparent",

    alignItems: "center"
  },
  searchBar: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  sliderWidth: {
    width: 300
  },
  itemWidth: {
    width: 100
  },
  carousel: {
    height: 500,
    width: "100%"
  },
  carouselImageStyle: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "contain"
  },
  searchBar: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modalTitle: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 8,
    fontWeight: "600"
  },
  modalFilterContainer: {
    flexDirection: "column",
    borderRadius: 20,
    marginLeft: 15,
    marginTop: 15
  },
  modalTag: {
    backgroundColor: "#eff0f1",
    borderRadius: 20
  },
  modalTagPressed: {
    backgroundColor: "#000000",
    borderRadius: 20
  },
  modalTagTitle: {
    fontSize: 16,
    color: "#2d2d2d",
    padding: 10
  },
  movieDetailHeaderContainer: {
    flex: 0.8,
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  movieDetailPosterStyle: {
    width: "100%",
    backgroundColor: "black",
    flexDirection: "row"
  },
  movieDetailHeaderText: {
    flex: 0.8,
    justifyContent: "flex-end",
    fontSize: 32,
    textAlign: "left",
    alignItems: "center",
    paddingLeft: 50,
    paddingTop: 50,
    color: "white"
  },
  editButton: {
    flex: 0.2,
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginRight: 20,
    marginTop: 50,
    width: "100%"
  },
  detailTitle: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 5,
    marginTop: 20
  },
  detailText: {
    fontSize: 16,
    textAlign: "left",
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 5,
  },
});
