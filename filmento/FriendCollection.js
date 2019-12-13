import React from "react";
import {
  View,
  Text,
  FlatList,
  Switch,
  SegmentedControlIOSComponent,
  Image,
  TouchableOpacity
} from "react-native";
import { Overlay, ButtonGroup, SearchBar } from "react-native-elements";
import { styles } from "./Styles";
import firebase from "firebase";
import "@firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";

const firebaseConfig = {
  apiKey: "AIzaSyBTcn24Cx35Cw5s1jeqEnQh9gaXccv_c_8",
  authDomain: "si669-film.firebaseapp.com",
  databaseURL: "https://si669-film.firebaseio.com",
  projectId: "si669-film",
  storageBucket: "si669-film.appspot.com",
  messagingSenderId: "1085644586813",
  appId: "1:1085644586813:web:354b9a69d3c17cfdbb4f54"
};

export class FriendCollectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      selectedIndex: 0,
      userCollectionData: [], // this array is for storing the user collection movie data, will be used for searching within collection
      arrayholder: [], // also for storing user collection movie data
    };

    this.friendAccountEmail = this.props.navigation.getParam('friendAccountEmail') // get friend accounnt email from previous screen
    

    this.navigatePage = "";

    this.db = firebase.firestore();

    // read entries collection from database and store in state
    this.userRef = this.db.collection("users").doc(this.friendAccountEmail);
    this.userRef.get().then(queryRef => {
      let docData = queryRef.data();
      let newUser = {
        username: docData.username,
        moviesCollection: docData.movies,
        password: docData.password,
        wishList: docData.wishList,
        firstName: docData.firstName,
        lastName: docData.lastName,
        profilepic: docData.profilepic,
      };

      this.setState({ 
        user: newUser, 
        userCollectionData: docData.movies,
        arrayholder: docData.movies,
      });
    });

    //this.tabs = ["My Movies", "Watch List", "Friend List"];
  }

  handleGoToInfo(clickedMovie) {
    this.props.navigation.navigate("FriendMovieDetail", {
      movie: clickedMovie,
      mainScreen: this
    });
  }

  // Added navigation logic, may still contain a minor bug, but so far testing has been fine.
  handleTab(newIndex) {
    this.setState({ prevIndex: this.state.selectedIndex, selectedIndex: newIndex })
    // alert('prev ' + this.state.prevIndex);
    // alert('new ' + this.state.selectedIndex);
    if (newIndex == 0 && newIndex != this.state.selectedIndex){
      this.navigatePage = "MovieCollection"
    } else if (newIndex == 1 && newIndex != this.state.selectedIndex){
      this.navigatePage = "WatchList"
    } else if (newIndex == 2 && newIndex != this.state.selectedIndex){
      this.navigatePage = "FriendList"
    }

    this.props.navigation.navigate(this.navigatePage, {
      user: this.state.user,
      mainScreen: this
    });
    this.setState({selectedIndex: 0}) // ser index back to the default for this page
  }

  // The following functions are for searching within the collection

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.state.arrayholder.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      userCollectionData: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search within collection"
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
        containerStyle={styles.searchBar}
        inputContainerStyle={{ backgroundColor: "#eff0f1" }}
      />
    );
  };

  render() {

    return (
      <View style={styles.container}>
        <View style = {styles.friendPagesPersonalHeaderContainer}>
          <View style = {styles.friendPagesPersonalHeaderContent}>
            <Image
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu24phVCd5LT9fgqgWzDOfrO-kj3nHcvOSC7kH6JOu-er-s9kd&s"}}
              style={{ width: 90, height: 90, borderRadius: 90 / 2 }}
            />
            {/* <Text>Charlene Ni</Text> */}
          </View>
        </View>
        <View style={styles.headerContainer}>
          {/* <Image
            source={{uri: user.profilepic}}
            style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
          /> */}
          <Text style={styles.friendCollectionHeaderText}>{this.state.user.username}'s movies</Text>
          <Text></Text>
          <View style={styles.headerButtons}>
            <Icon.Button
              name="filter"
              color="black"
              backgroundColor="transparent"
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.user.moviesCollection}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() => {
                    this.handleGoToInfo(item);
                  }}
                >
                  <Image
                    style={styles.imageStyle}
                    resizeMode="contain"
                    source={{ uri: item.poster }}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id} 
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
      </View>
    );
  }
}
