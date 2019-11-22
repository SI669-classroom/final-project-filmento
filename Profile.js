import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';

export class ProfileScreen extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
        </View>
    );
  }
}