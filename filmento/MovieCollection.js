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
import { Overlay, ButtonGroup } from "react-native-elements";
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

export class MovieCollectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      selectedIndex: 0,
      movies: [],
      passMovie: {}
    };

    // set up database
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();

    // read entries collection from database and store in state
    this.usersRef = this.db.collection("users").doc("testsub");
    this.usersRef.get().then(queryRef => {
      let docData = queryRef.data();
      let newUser = {
        username: docData.username,
        firstname: docData.firstName,
        lastname: docData.lastName,
        email: docData.email
      };

      this.setState({ user: newUser });
    });

    //get subcollection
    this.moviesRef = this.db
      .collection("users")
      .doc("testsub")
      .collection("movies");
    this.moviesRef.get().then(queryRef => {
      let newMovies = [];
      queryRef.forEach(docRef => {
        let docData = docRef.data();
        let newMovie = {
          key: docRef.id,
          title: docData.title,
          director: docData.director,
          releaseDate: docData.releaseDate,
          poster: docData.poster,
          genre: docData.genre,
          note: docData.note,
          emoji: docData.emoji,
          labels: docData.labels,
          tag: docData.tag
        };
        newMovies.push(newMovie);
      });
      this.setState({ movies: newMovies });
    });

    this.tabs = ["My Movies", "Watch List", "Friend List"];
  }

  handleGoToMCDetail(clickedMovie) {
    this.props.navigation.navigate("MovieCollectionDetail", {
      movie: clickedMovie,
      updateMovie: movie => this.updateMovie(movie)
    });
  }

  addEntry(newEntry) {
    this.entriesRef.add(newEntry).then(docRef => {
      newEntry.key = docRef.id;
      let newEntries = this.state.entries.slice(); // clone the list
      newEntries.push(newEntry);
      newEntries.sort((a, b) => (a.priority > b.priority ? 1 : -1)); //get sorting code from https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
      this.setState({ entries: newEntries });
    });
  }

  updateMovie(movieToUpdate) {
    this.moviesRef
      .doc(movieToUpdate.key)
      .set({
        title: movieToUpdate.title,
        director: movieToUpdate.director,
        releaseDate: movieToUpdate.releaseDate,
        poster: movieToUpdate.poster,
        genre: movieToUpdate.genre,
        note: movieToUpdate.note,
        emoji: movieToUpdate.emoji,
        labels: movieToUpdate.labels,
        tag: movieToUpdate.tag
      })
      .then(() => {
        let newMovies = [];
        for (movie of this.state.movies) {
          if (movie.key === movieToUpdate.key) {
            newMovies.push(movieToUpdate);
          } else {
            newMovies.push(movie);
          }
        }
        this.setState({ movies: newMovies });
      });
      
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Ｍy Movies</Text>
          <View style={styles.headerButtons}>
            <Icon.Button
              name="search"
              color="black"
              backgroundColor="transparent"
              // onPress={() => {
              //   this.handleEdit(item);
              // }}
            />
            <Icon.Button
              name="filter"
              color="black"
              backgroundColor="transparent"
              // onPress={() => {
              //   this.handleEdit(item);
              // }}
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.movies}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() => {
                    this.handleGoToMCDetail(item);
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
          />
        </View>
        <View style={styles.footerContainer}>
          <ButtonGroup
            onPress={newIndex => this.setState({ selectedIndex: newIndex })}
            selectedIndex={this.state.selectedIndex}
            buttons={this.tabs}
            containerStyle={styles.buttonGroupContainer}
            // selectedButtonStyle={styles.buttonGroupSelected}
            // selectedTextStyle={styles.buttonGroupSelectedText}
            // buttonStyle={styles.buttonGroupStyle}
            // textStyle={styles.buttonGroupText}
          />
          <Icon.Button
            name="plus-circle"
            color="black"
            backgroundColor="transparent"
            onPress={() => {
              this.props.navigation.navigate("AddMovieToCollection", {
                mainScreen: this,
                movies: this.state.movies
              });
            }}
          />
        </View>
      </View>
    );
  }
}
