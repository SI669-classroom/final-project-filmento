import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Overlay, ButtonGroup, SearchBar } from "react-native-elements";
import { styles } from "./Styles";
import firebase from "firebase";
import "@firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";

export class MovieCollectionPage extends React.Component {
  constructor(props) {
    super(props);

    //this.UID = this.props.navigation.getParam("UID");

    this.state = {
      user: [],
      selectedIndex: 0,
      movies: [],
      arrayholder: [] ,// also for storing user collection movie data
      //value: ''
    };

    this.db = firebase.firestore();

    // read entries collection from database and store in state

    //this.usersRef = this.db.collection("users").doc(this.UID);
    this.usersRef = this.db.collection("users").doc("testsub");

    this.usersRef.get().then(queryRef => {
      let docData = queryRef.data();
      //let newUser = {
      // moviesCollection: docData.movies,
      // wishList: docData.wishList
      //};

      this.setState({
        //user: newUser,
        userCollectionData: docData.collection("movies"),
        arrayholder: docData.collection("movies")
      });
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
      this.setState({
        movies: newMovies,
        arrayholder: newMovies,
      });
    });

    this.tabs = ["My Movies", "Watch List", "Friend List"];
  }

  handleGoToMCDetail(clickedMovie) {
    this.props.navigation.navigate("MovieCollectionDetail", {
      movie: clickedMovie,
      updateMovie: movie => this.updateMovie(movie)
    });
  }

  // The following functions are for searching within the collection

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

  searchFilterFunction = text => {
    this.setState({
       value: text
     });

    const newData = this.state.arrayholder.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      movies: newData,
      //value: text
    });
    console.log('check value', this.state.value)
    console.log('newData', newData)
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search within My Movies"
        //placeholderTextColor='#'
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

  // renderCollectionSearch = () => {
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <FlatList
  //         data={this.state.userCollectionData}
  //         renderItem={({ item }) => (
  //           <ListItem
  //             leftAvatar={{ size: 'medium', rounded: false, source: { uri: item.poster } }}
  //             title={`${item.title}`}
  //             titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: '20' }}
  //             subtitle={`${item.releaseDate}`}
  //             subtitleStyle={{ color: 'black' }}
  //           />
  //         )}
  //         keyExtractor={item => item.title}
  //         ItemSeparatorComponent={this.renderSeparator}
  //         ListHeaderComponent={this.renderHeader}
  //       />
  //     </View>
  //   );
  // }

  // searchMyCollection() {
  //   alert(this.state.userCollectionData[0].title)
  // }
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
    console.log('test render')
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Movies</Text>
          <View style={styles.headerButtons}>
            <Icon.Button
              name="search"
              color="black"
              backgroundColor="transparent"
              onPress={() => {
                this.renderCollectionSearch(); // calls the function for pulling up the search bar
              }}
            />
            <Icon.Button
              name="filter"
              color="black"
              backgroundColor="transparent"
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.movies}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={styles.posterContianer}>
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
                </View>
              );
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
        <View style={styles.footerContainer}>
          <ButtonGroup
            onPress={newIndex => this.setState({ selectedIndex: newIndex })}
            selectedIndex={this.state.selectedIndex}
            buttons={this.tabs}
            containerStyle={styles.buttonGroupContainer}
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
