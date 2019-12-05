import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";

export class AddToMCPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Add movie </Text>
          <View style={styles.headerButtons}></View>
        </View>
        <View style={styles.bodyContainer}></View>
        <View style={styles.footerContainer}></View>
      </View>
    );
  }
}
