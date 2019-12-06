import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Input, CheckBox, ButtonGroup } from 'react-native-elements';
import { styles } from './Styles';
import firebase from "firebase";
import "@firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";

export class WatchListPage extends React.Component {

  constructor(props) {
    super(props);

    this.user = this.props.navigation.getParam('user', undefined);
    this.mainScreen = this.props.navigation.getParam('mainScreen');

    this.state = {
      selectedIndex: 1,
    };
    this.navigatePage = "";
    this.tabs = ["My Movies", "Watch List", "Friend List"];
  }

    // Navigation logic
    handleTab(newIndex) {
      this.setState({ prevIndex: this.state.selectedIndex, selectedIndex: newIndex })
      if (newIndex == 0 && newIndex != this.state.selectedIndex){
        this.navigatePage = "MovieCollection"
      } else if (newIndex == 1 && newIndex != this.state.selectedIndex){
        this.navigatePage = "WatchList"
      } else if (newIndex == 2 && newIndex != this.state.selectedIndex){
        this.navigatePage = "FriendList"
      }
  
      this.props.navigation.navigate(this.navigatePage, {
        user: this.state.user,
        mainScreen: this
      });
      this.setState({selectedIndex: 1}) // ser index back to the default for this page
    }


  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.MainTabsTopBlankSpace}></View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Watch List</Text>
        <View style={styles.headerButtons}>
          <Icon.Button
            name="filter"
            color="black"
            backgroundColor="transparent"
          />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        {/* <FlatList
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
          ListHeaderComponent={this.renderHeader}
        /> */}
      </View>
        
        <View style={styles.footerContainer}>
            <ButtonGroup
              onPress={ newIndex =>
                this.handleTab(newIndex)
              }
              selectedIndex={this.state.selectedIndex}
              buttons={this.tabs}
              containerStyle={styles.buttonGroupContainer}
              underlayColor='black'
              selectedButtonStyle={styles.buttonGroupSelected}
              selectedTextStyle={styles.buttonGroupSelectedText}
              buttonStyle={styles.buttonGroupStyle}
              textStyle={styles.buttonGroupText}
            />
            <Icon.Button
            name="plus-circle"
            color="black"
            backgroundColor="transparent"
            size='40'
            // onPress={() => {
            //   this.props.navigation.navigate("AddMovieToCollection", {
            //     mainScreen: this,
            //     movies: this.state.movies
            //   });
            // }}
          />
        </View>
      </View>
    );
  }

}