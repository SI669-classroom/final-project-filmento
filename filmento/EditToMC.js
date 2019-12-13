import React from "react";
import { View, Text, Image, KeyboardAvoidingView, TextInput , FlatList} from "react-native";
import { Button, Input, ButtonGroup } from "react-native-elements";
import { styles } from "./Styles";

export class EditMCPage extends React.Component {
  constructor(props) {
    super(props);

    this.movie = this.props.navigation.getParam("movieInfo", undefined);
    this.mainScreen = this.props.navigation.getParam("mainScreen");
    this.updateMovieDetail = this.props.navigation.getParam(
      "updateMovieDetail"
    );

    this.isAdd = typeof this.movie === "undefined";

    let initNote = "";
    let initMood = "";
    this.emojiList = ["😆", "🤔", "😪", "😱", "😡", "😭", "😍"];

    if (!this.isAdd) {
      initNote = this.movie.note;
      initMood = this.movie.emoji;
    }

    this.state = {
      emojis: [],
      inputNote: initNote,
      inputMood: initMood,
      selectedIndex: 0
    };
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
      poster: this.movie.poster,
      genre: this.movie.genre,
      labels: this.movie.labels,
      tag: this.movie.tag
    };
    let mainScreen = this.props.navigation.getParam("mainScreen");
    if (this.isAdd) {
      mainScreen.addMovie(newMovie);
    } else {
      newMovie.key = this.movie.key;
      this.updateMovieDetail(newMovie);
    }
    this.props.navigation.goBack();
  };

  render() {
    console.log(this.movie.genre);
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.movieDetailHeaderContainer}>
          <Text style={styles.headerText}>Edit my movie</Text>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={{ uri: this.movie.poster }}
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.movieInfoContainer}>
            <Text style={styles.detailTitle}>Title</Text>
            <Text style={styles.detailText}>{this.movie.title} </Text>
            <Text style={styles.detailTitle}>Director</Text>
            <Text style={styles.detailText}>{this.movie.director} </Text>
            <Text style={styles.detailTitle}>Genre</Text>
            <FlatList
              data={this.movie.genre}
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
      </KeyboardAvoidingView>
    );
  }
}
