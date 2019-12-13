import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from "react-native";
import { styles } from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";

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
        <View style={styles.movieDetailHeaderContainer}>
          <ImageBackground
            style={styles.movieDetailPosterStyle}
            imageStyle={{ opacity: 0.5 }}
            resizeMode="cover"
            source={{ uri: this.state.movie.poster }}
          >
            <Text style={styles.movieDetailHeaderText}>
              {this.state.movie.title}
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Icon.Button
                name="edit"
                color="white"
                size={30}
                backgroundColor="transparent"
                onPress={() => {
                  this.handleEdit(this.movie);
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.movieInfoContainer}>
            <Text style={styles.detailTitle}>Director</Text>
            <Text style={styles.detailText}>{this.state.movie.director} </Text>
            <Text style={styles.detailTitle}>Genre</Text>
            <FlatList
              data={this.state.movie.genre}
              horizontal={true}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text style={styles.detailText}>{item} |</Text>
                  </View>
                );
              }}
              keyExtractor={item => item.key}
              ListHeaderComponent={this.renderHeader}
            />
            <Text style={styles.detailTitle}>Note</Text>
            <Text style={styles.detailText}>{this.state.movie.note}</Text>
            <Text style={styles.detailTitle}>Mood</Text>
            <Text style={styles.detailText}> {this.state.movie.emoji}</Text>
          </View>
        </View>
        <View style={styles.footerContainer}></View>
      </View>
    );
  }
}
