import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { styles } from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Tile } from "react-native-elements";

export class MCDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.movie = this.props.navigation.getParam("movie", undefined);
    this.updateMovie = this.props.navigation.getParam("updateMovie");

    this.state = {
      movie: this.movie
    };
  }

  handleEdit(movieToUpdate) {
    this.props.navigation.navigate("EditMovieCollection", {
      movieInfo: movieToUpdate,
      mainScreen: this.mainScreen,
      updateMovieDetail: movie => this.updateMovieDetail(movie)
    });
  }

  updateMovieDetail(updatedMovie) {
    this.updateMovie(updatedMovie);
    this.setState({ movie: updatedMovie });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* <Text style={styles.headerText}>{this.state.movie.title}</Text>
          <View style={styles.headerButtons}>
            <Icon.Button
              name="edit"
              color="black"
              backgroundColor="transparent"
              onPress={() => {
                this.handleEdit(this.movie);
              }}
            /> 
          </View> */}
          <Tile
              imageSrc={{uri: this.state.movie.poster}}
              title={this.state.movie.title}
              featured
              imageContainerStyle = {styles.tileImageContainer}
              containerStyle ={styles.tileContainer}
              height={300}
            />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.infoImageContainer}>
            {/* <ImageBackground 
              style={styles.movieDetailImageStyle}
              resizeMode="stretch"
              source={{ uri: this.state.movie.poster }}
            /> */}
          </View>
          <View style={styles.movieInfoContainer}>
            <Text style={styles.detailTitle}>Director</Text>
            <Text style={styles.detailText}>{this.state.movie.director} </Text>
            <Text style={styles.detailTitle}>Genre</Text>
            <Text style={styles.detailText}>{this.state.movie.genre}</Text>
            <Text style={styles.detailTitle}>Note</Text>
            <Text style={styles.detailText}>{this.state.movie.note}</Text>
            <Text style={styles.detailTitle}>Mood</Text>
            <Text style={styles.detailText}> {this.state.movie.emoji}</Text>
            <Text style={styles.detailTitle}>Labels</Text>
            <Text style={styles.detailText}> {this.state.movie.labels}</Text>
            <Text style={styles.detailTitle}>
              Who watched this movie with me
            </Text>
            <Text style={styles.detailText}> {this.state.movie.tag}</Text>
          </View>
        </View>
        <View style={styles.footerContainer}></View>
      </View>
    );
  }
}
