import React from "react";
import { View, Text, FlatList, Image } from "react-native";
// import { Button, Input, CheckBox, ButtonGroup } from 'react-native-elements';
import { styles } from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Overlay } from "react-native-elements";
import { MovieCollectionPage } from "./MovieCollection";

export class MCDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.movie = this.props.navigation.getParam("movie", undefined);
    this.mainScreen = this.props.navigation.getParam("mainScreen");
    this.updateMovie = this.props.navigation.getParam("updateMovie");

    this.state = {
      movieDetail:this.movie,
      emoji: this.movie.emoji
    };
  }
  
  handleEdit(movieToUpdate) {
    this.props.navigation.navigate("EditMovieCollection", {
      movieInfo: movieToUpdate,
      mainScreen: this.mainScreen,
      updateMovie: movie => this.updateMovie(movie)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{this.state.movieDetail.title}</Text>
          <View style={styles.headerButtons}>
            <Icon.Button
              name="edit"
              color="black"
              backgroundColor="transparent"
              onPress={() => {
                this.handleEdit(this.state.movieDetail);
              }}
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          {/* <FlatList
            data={Object.keys(this.movie)}
            renderItem={({ item }) => (
              <Text>
                {item} : {this.movie[item]}
              </Text>
            )}
          /> */}
          <View style={styles.infoImageContainer}>
            <Image
              style={styles.imageStyle}
              resizeMode="contain"
              source={{ uri: this.state.movieDetail.poster }}
            />
          </View>
          <View style={styles.movieInfoContainer}>
            {/* <Text>Release Date: {this.movie["releaseDate"]}</Text> */}
            <Text style={styles.detailTitle}>Director</Text>
            <Text style={styles.detailText}>{this.state.movieDetail.director} </Text>
            <Text style={styles.detailTitle}>Genre</Text>
            <Text style={styles.detailText}>{this.state.movieDetail.genre}</Text>
            <Text style={styles.detailTitle}>Note</Text>
            <Text style={styles.detailText}>{this.state.movieDetail.note}</Text>
            <Text style={styles.detailTitle}>Mood</Text>
            <Text style={styles.detailText}> {this.state.emoji}</Text>
            <Text style={styles.detailTitle}>Labels</Text>
            <Text style={styles.detailText}> {this.state.movieDetail.labels}</Text>
          </View>
        </View>
        <View style={styles.footerContainer}></View>
      </View>
    );
  }
}
