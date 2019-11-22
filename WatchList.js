import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';

export class WatchListScreen extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>My Watch List</Text>
            </View>
        </View>
    );
  }
}