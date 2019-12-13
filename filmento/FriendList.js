import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import {
  ListItem,
  SearchBar,
  ButtonGroup,
  Button
} from "react-native-elements";
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
  appId: "1:1085644586813:web:7118c2315988b465bb4f54"
};

export class FriendListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 1,
      loading: false,
      userData: [], // for storing the data of all existing users
      friendData: [],
      error: null
    };

    this.navigatePage = "";
    this.tabs = ["My Movies", "Friend List"];

    this.arrayholder = [];
    this.friends = []; // each item in this array is a string that represents the email of a friend account

    const db = firebase.firestore();
    // db reference for all users data
    this.userDataRef = db.collection("users");
    this.userDataRef.get().then(queryRef => {
      let newEntries = [];
      queryRef.forEach(docRef => {
        let docData = docRef.data();
        let newEntry = {
          email: docData.email,
          firstname: docData.firstName,
          friends: docData.friends,
          lastname: docData.lastName,
          movies: docData.movies,
          username: docData.username,
          wishlist: docData.wishlist,
          profilepic: docData.profilepic,
          id: docRef.id
        };
        newEntries.push(newEntry);
        //this.arrayholder.push(newEntry); //
      });
      this.setState({ userData: newEntries });

      for (user of this.state.userData) {
        if (user.email == "rexsu@gmail.com") {
          for (i = 0; i < user.friends.length; i++) {
            this.friends.push(user.friends[i]);
          }
          //alert(this.friends)
        }
      }
      let userToAddToFriendData = []; // temporary array to hold entries for setting state for friendData
      for (user of this.state.userData) {
        if (this.friends.includes(user.email)) {
          //alert(user.username)
          userToAddToFriendData.push(user); // push to temp array
          this.arrayholder.push(user); // push to arrayholder, for search filter
        }
      }
      //alert(userToAddToFriendData[0].movies[0].title)
      this.setState({ friendData: userToAddToFriendData }); // update friendData value
    });
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  // Navigation logic
  handleTab(newIndex) {
    this.setState({
      prevIndex: this.state.selectedIndex,
      selectedIndex: newIndex
    });
    if (newIndex == 0 && newIndex != this.state.selectedIndex) {
      this.navigatePage = "MovieCollection";
    } else if (newIndex == 1 && newIndex != this.state.selectedIndex) {
      this.navigatePage = "FriendList";
    }

    this.props.navigation.navigate(this.navigatePage, {
      user: this.state.user,
      mainScreen: this
    });
    this.setState({ selectedIndex: 1 }); // set index back to the default for this page
  }

  searchFilterFunction = text => {
    this.setState({
      value: text
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.username.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      friendData: newData
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search friend by username"
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
        <View style={styles.friendPagesPersonalHeaderContainer}>
          <View style={styles.friendPagesPersonalHeaderContent}>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu24phVCd5LT9fgqgWzDOfrO-kj3nHcvOSC7kH6JOu-er-s9kd&s"
              }}
              style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
            />
          </View>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Friends</Text>
          <View style={styles.headerButtons}>
            <Icon.Button
              name="inbox"
              color="black"
              backgroundColor="transparent"
              // onPress={() => {
              // }}
            />
            <Icon.Button
              name="user-plus"
              color="black"
              backgroundColor="transparent"
              onPress={() => {
                this.props.navigation.navigate("AddFriend");
              }}
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.friendData}
            renderItem={({ item }) => (
              <ListItem
                leftAvatar={{
                  size: "medium",
                  rounded: true,
                  source: { uri: item.profilepic }
                }} //
                title={`${item.firstname}` + " " + `${item.lastname}`}
                titleStyle={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 20
                }}
                subtitle={`${item.username}`}
                subtitleStyle={{ color: "black" }}
                onPress={() =>
                  this.props.navigation.navigate("FriendCollection", {
                    friendAccountEmail: item.email
                  })
                }
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
        <View style={styles.footerContainer}>
          <ButtonGroup
            onPress={newIndex => this.handleTab(newIndex)}
            selectedIndex={this.state.selectedIndex}
            buttons={this.tabs}
            containerStyle={styles.buttonGroupContainer}
            underlayColor="black"
            selectedButtonStyle={styles.buttonGroupSelected}
            selectedTextStyle={styles.buttonGroupSelectedText}
            buttonStyle={styles.buttonGroupStyle}
            textStyle={styles.buttonGroupText}
          />
        </View>
      </View>
    );
  }
}
