import React from 'react';
import { View, Text, FlatList } from 'react-native';
// import { Button, Input, CheckBox, ButtonGroup } from 'react-native-elements';
import { styles } from './Styles';

export class FriendListPage extends React.Component {

  constructor(props) {
    super(props);

    this.user = this.props.navigation.getParam('user', undefined);
    this.mainScreen = this.props.navigation.getParam('mainScreen');

    this.state = {
      
    }
  }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Friend List</Text>
          </View>
          <View style={styles.detailsBodyContainer}>
            <View style={styles.detailListItemLeft}>
              <View style={styles.detailsInputContainer}>
              
              </View>
            </View>
            <View style={styles.detailListItemRight}>
              <View style={styles.detailsInputContainer}>
                
            </View>
          </View>
        </View>
        
        <View style={styles.footerContainer}>
          
        </View>
      </View>
    );
  }

}