import React, {Component} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { styles } from './Styles';

import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTcn24Cx35Cw5s1jeqEnQh9gaXccv_c_8",
    authDomain: "si669-film.firebaseapp.com",
    databaseURL: "https://si669-film.firebaseio.com",
    projectId: "si669-film",
    storageBucket: "si669-film.appspot.com",
    messagingSenderId: "1085644586813",
    appId: "1:1085644586813:web:7118c2315988b465bb4f54"
  };

export class FriendListPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: false,      
            userData: [],
            friendData: [],      
            error: null,    
          };

        this.arrayholder = [];

        const db = firebase.firestore();
        // db reference for user data
        this.userDataRef = db.collection('users'); 
        this.userDataRef.get().then(queryRef=>{
        let newEntries = [];
        queryRef.forEach(docRef=>{
            let docData = docRef.data();
            let newEntry = {
            email: docData.email,
            firstname: docData.firstName,
            friends: docData.friends,
            lastname: docData.lastName,
            movies: docData.movies,
            username: docData.username,
            wishlist: docData.wishlist,
            id: docRef.id,
            }
            newEntries.push(newEntry);
            //this.arrayholder.push(newEntry); //
        })
        this.setState({userData: newEntries});
        });
        // create friend data for the user
        this.friends = []
        for (user in this.state.userData) {
            alert('!')
            if (user.email == 'jacktest2@gmail.com') {
                alert('found')
                this.friends = user.friends;
            }
        }
        for (user in this.state.userData) {
            if (this.friends.includes(user.email)) {
                let friendIndex;
                for (i = 0; i < userData.length; i++) {
                    if (userData[i].email == user.email ) {
                        friendData.push(userData[i]);
                        this.arrayholder.push(userData[i]);
                    }
                }
            }
        }
    }
    
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
    
        const newData = this.arrayholder.filter(item => {
          const itemData = `${item.username.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          friendData: newData,
        });
      };
    
      renderHeader = () => {
        return (
          <SearchBar
            placeholder="Search friend by username"
            darkTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        );
      };
    
      render() {
        return (
          <View style={{ flex: 1 }}>          
            <FlatList
              data={this.state.friendData}
              renderItem={({ item }) => (
                <ListItem
                  leftAvatar={{ size: 'medium', rounded: true, }} //source: { uri: item.moviePosters[0] }
                  title={`${item.firstname}` + " " + `${item.lastname}`}
                  titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: '20' }}
                  subtitle={`${item.username}`}
                  subtitleStyle={{ color: 'black' }}
                />
              )}
              keyExtractor={item => item.id} 
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
            />
          </View>
        );
      }
}