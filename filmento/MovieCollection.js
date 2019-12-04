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
import { Overlay, ButtonGroup, SearchBar } from "react-native-elements";
import { styles } from "./Styles";
import firebase from "firebase";
import "@firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";



export class MovieCollectionPage extends React.Component {
  constructor(props) {
    super(props);


    this.UID = this.props.navigation.getParam('UID');


    this.state = {
      user: {},
      selectedIndex: 0,
      userCollectionData: [], // this array is for storing the user collection movie data, will be used for searching within collection
      arrayholder: [], // also for storing user collection movie data
    };


    this.db = firebase.firestore();

    // read entries collection from database and store in state
    this.usersRef = this.db.collection("users").doc(this.UID);

    this.usersRef.get().then(queryRef => {
      let docData = queryRef.data();
      let newUser = {
        moviesCollection: docData.movies,

        wishList: docData.wishList
      };

      this.setState({ 
        user: newUser, 
        userCollectionData: docData.movies,
        arrayholder: docData.movies,
      });
    });

    this.tabs = ["My Movies", "Watch List", "Friend List"];
  }

  handleGoToInfo(clickedMovie) {
    this.props.navigation.navigate("MovieCollectionDetail", {
      movie: clickedMovie,
      mainScreen: this
    });
  }

  //still don't know how to navigate to other page
  handleTab(item) {
    this.props.navigation.navigate(navigatePage, {
      user: this.state.user,
      mainScreen: this
    });
  }

  // The following functions are for searching within the collection

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.state.arrayholder.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      userCollectionData: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search within My Movies"
        darkTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
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

  render() {
    let navigatePage = "";
    if (this.state.selectedIndex == 0){
        navigatePage == "MovieCollection"
    } else if (this.state.selectedIndex == 1){
        navigatePage == "WatchList"
    } else if (this.state.selectedIndex == 2){
        navigatePage == "FriendList"
    }

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
              // onPress={() => {
              //   this.handleEdit(item);
              // }}
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.userCollectionData}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() => {
                    this.handleGoToInfo(item);
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
            keyExtractor={item => item.id} 
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
        <View style={styles.footerContainer}>
          <ButtonGroup
            onPress={newIndex =>
              this.setState({ selectedIndex: newIndex }) 
            }
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
                this.props.navigation.navigate('AddMovieToCollection', {
                  mainScreen: this,
                  user: this.state.user})
              }}
            />
        </View>
      </View>
    );
  }

}

