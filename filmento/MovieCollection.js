import React from "react";
import {
  View,
  Text,
  FlatList,
  Switch,
  SegmentedControlIOSComponent
} from "react-native";
// import { Button, CheckBox } from "react-native-elements";
import { styles } from "./Styles";
import firebase from "firebase";
import "@firebase/firestore";
// import Icon from "react-native-vector-icons/FontAwesome";

const firebaseConfig = {
  apiKey: "AIzaSyBTcn24Cx35Cw5s1jeqEnQh9gaXccv_c_8",
  authDomain: "si669-film.firebaseapp.com",
  databaseURL: "https://si669-film.firebaseio.com",
  projectId: "si669-film",
  storageBucket: "si669-film.appspot.com",
  messagingSenderId: "1085644586813",
  appId: "1:1085644586813:web:354b9a69d3c17cfdbb4f54"
};

export class MovieCollectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };

    // set up database
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();

    // read entries collection from database and store in state
    this.usersRef = this.db.collection("users").doc("charlene123");
    this.usersRef.get().then(queryRef => {
      let docData = queryRef.data();
      let newUser = {
        moviesCollection: docData.movies,
        password: docData.password,
        wishList: docData.wishList
      };

      this.setState({ user: newUser });
    });
  }

  render() {
    console.log(this.state.moviesCollection);
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Ｍy Movies</Text>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.user.moviesCollection}
            renderItem={({ item }) => {
              return (
                <View style={styles.bodyListItem}>
                  <View style={styles.bodyListItemLeft}>
                    <Text numberOfLines={1} style={styles.bodyListItemText}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.footerContainer}></View>
      </View>
    );
  }
}
