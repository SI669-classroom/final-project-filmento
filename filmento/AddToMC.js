import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Overlay, ButtonGroup, SearchBar } from "react-native-elements";
import { styles } from "./Styles";
import firebase from "firebase";
import "@firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";

export class AddToMCPage extends React.Component {
  constructor(props) {
    super(props);

    this.movies = this.props.navigation.getParam("movies", undefined);
    this.mainScreen = this.props.navigation.getParam("mainScreen");
    this.updateMovie = this.props.navigation.getParam("updateMovie");
    this.updateMovieCollection = this.props.navigation.getParam("updateMovieCollection");
    this.addMovie = this.props.navigation.getParam("addMovie");

    this.state = {
      moviesData: [],
      arrayholder: []
    };

    this.db = firebase.firestore();
    this.moviesDataRef = this.db.collection("moviesdata");
    this.moviesDataRef.get().then(queryRef => {
      let newMoviesData = [];
      queryRef.forEach(docRef => {
        let docData = docRef.data();
        let newMovieData = {
          key: docRef.id,
          title: docData.title,
          director: docData.director,
          genre: docData.genre,
          moviePosters: docData.moviePosters,
          releaseDate: docData.releaseDate,
          released: docData.released,
          streamingPlatforms: docData.streamingPlatforms
        };
        newMoviesData.push(newMovieData);
      });

      this.setState({ moviesData: newMoviesData, arrayholder: newMoviesData });
    });
  }

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
      moviesData: newData
    });
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

  handleGoToAddMovieDetail(clickedMovie) {
    this.props.navigation.navigate("AddMovieDetail", {
      movie: clickedMovie,
      updateMovie: movie => this.updateMovie(movie),
      updateMovieCollection: movie => this.updateMovieCollection(movie),
      addMovie: movie => this.addMovie(movie)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Add movie</Text>
          <View style={styles.headerButtons}>
            <Icon.Button
              name="search"
              color="black"
              backgroundColor="transparent"

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
            data={this.state.moviesData}
            numColumns={5}
            renderItem={({ item }) => {
              return (
                <View style={styles.posterContianer}>
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => {
                      this.handleGoToAddMovieDetail(item);
                    }}
                  >
                    <Image
                      style={styles.imageStyle}
                      resizeMode="contain"
                      source={{ uri: item.moviePosters[0] }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={item => item.key}
            ItemSeparatorComponent={this.mainScreen.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
        <View style={styles.footerContainer}></View>
      </View>
    );
  }
}
