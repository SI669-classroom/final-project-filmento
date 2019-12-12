import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, ButtonGroup } from "react-native-elements";
import { styles } from "./Styles";
import Carousel from "react-native-anchor-carousel";

export class AddMovieDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.movie = this.props.navigation.getParam("movie", undefined);
    this.mainScreen = this.props.navigation.getParam("mainScreen");
    this.updateMovie = this.props.navigation.getParam("updateMovie");
    this.updateMovieCollection = this.props.navigation.getParam(
      "updateMovieCollection"
    );
    this.addMovie = this.props.navigation.getParam("addMovie");

    this.isAdd = typeof this.movie === "undefined";

    let initNote = "";
    let initMood = "";
    this.emojiList = ["😆", "🤔", "😪", "😱", "😡", "😭", "😍"];

    // if (!this.isAdd) {
    //   initNote = this.movie.note;
    //   initMood = this.movie.emoji;
    // }

    this.state = {
      emojis: [],
      inputNote: initNote,
      inputMood: initMood,
      selectedIndex: 0,
      posterIndex: 0
    };
    this.labels = ["test", "2019"];
    this.tag = "";
  }

  componentDidMount() {
    let newEmojiList = [];
    let initialIndex = 0;

    let i = 0;

    for (emoji of this.emojiList) {
      if (emoji == this.movie.emoji) {
        initialIndex = i;
      }
      newEmojiList.push(emoji);
      i++;
    }

    this.setState({
      emojis: newEmojiList,
      selectedIndex: initialIndex
    });
  }

  handleSave = () => {
    let newMovie = {
      note: this.state.inputNote,
      emoji: this.emojiList[this.state.selectedIndex],
      title: this.movie.title,
      director: this.movie.director,
      releaseDate: this.movie.releaseDate,
      poster: this.movie.moviePosters[this.state.posterIndex],
      genre: this.movie.genre,
      labels: this.labels,
      tag: this.tag
    };
    let mainScreen = this.props.navigation.getParam("mainScreen");
    if (this.isAdd) {
      this.addMovie(newMovie);
    } else {
      newMovie.key = this.movie.key;
      this.updateMovieCollection(newMovie);
    }
    this.props.navigation.navigate("MovieCollection");
  };

  renderItem = ({ item, index }) => {
    const { backgroundColor } = item;
    return (
      <TouchableOpacity
        style={[styles.item, { backgroundColor }]}
        onPress={() => {
          this._carousel.scrollToIndex(index);
          this.setState({posterIndex: index});
        }}
      >
        <Image
          style={styles.carouselImageStyle}
          // resizeMode="cover"
          source={{ uri: item }}
        />
      </TouchableOpacity>
    );
  };

  render() {
    console.log(this.state.posterIndex)
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Add my movie</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.infoImageContainer}>
            <Carousel
              style={styles.carousel}
              data={this.movie.moviePosters}
              renderItem={this.renderItem}
              itemWidth={200}
              containerWidth={250}
              separatorWidth={0}
              ref={c => {
                this._carousel = c;
              }}
              initialIndex={this.state.posterIndex}
              //pagingEnable={false}
            />
            {/* <Image
              style={styles.imageStyle}
              resizeMode="contain"
              source={{ uri: this.movie.moviePosters[0] }}
            /> */}
          </View>
          <View style={styles.movieInfoContainer}>
            <Text style={styles.detailTitle}>Title</Text>
            <Text style={styles.detailText}>{this.movie.title} </Text>
            <Text style={styles.detailTitle}>Director</Text>
            <Text style={styles.detailText}>{this.movie.director} </Text>
            <Text style={styles.detailTitle}>Genre</Text>
            <Text style={styles.detailText}>{this.movie.genre}</Text>
            <Text style={styles.detailTitle}>Note</Text>
            <Input
              multiline={true}
              placeholder="Note"
              value={this.state.inputNote}
              onChangeText={value => {
                this.setState({ inputNote: value });
              }}
            />
            <Text style={styles.detailTitle}>Mood</Text>
            <View>
              <ButtonGroup
                onPress={newIndex => this.setState({ selectedIndex: newIndex })}
                selectedIndex={this.state.selectedIndex}
                buttons={this.emojiList}
              />
            </View>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Button
            title="Cancel"
            containerStyle={styles.mediumButtonContainer}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Button title="Save" onPress={this.handleSave} />
        </View>
      </View>
    );
  }
}
