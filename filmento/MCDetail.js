import React from "react";
import { View, Text, FlatList } from "react-native";
// import { Button, Input, CheckBox, ButtonGroup } from 'react-native-elements';
import { styles } from "./Styles";

export class MCDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.movie = this.props.navigation.getParam("movie", undefined);
    this.mainScreen = this.props.navigation.getParam("mainScreen");

    this.state = {};
  }

  //   componentDidMount() {
  //     let newLabels = []
  //     let initialCategoryIndex = 0;
  //     let newPriotity = []
  //     let initialPriorityIndex = 0;

  //     let i = 0;
  //     for (label of this.labelCollection) {
  //       if (this.entryToUpdate && this.entryToUpdate.label && label.name.toLowerCase() == this.entryToUpdate.label.toLowerCase()) {
  //         initialCategoryIndex = i;
  //       }
  //       newLabels.push(label.name)
  //       i++;
  //     };

  //     let j = 0;
  //     for (priority of this.priorities) {
  //       if (this.entryToUpdate && this.entryToUpdate.priority && j == this.entryToUpdate.priority){
  //         initialPriorityIndex = j;
  //       }
  //       newPriotity.push(priority)
  //       j++
  //     }

  //     this.setState({
  //       labels: newLabels,
  //       categorySelectedIndex: initialCategoryIndex,
  //       prioritySelectedIndex: initialPriorityIndex
  //     });
  //   }

  //   handleSave = () => {
  //     let { labels, categorySelectedIndex } = this.state;
  //     let newEntry = {
  //       summary: this.state.inputSummary,
  //       detail:this.state.inputDetail,
  //       timestamp: new Date(Date.now()),
  //       label: labels[categorySelectedIndex],
  //       priority: this.state.prioritySelectedIndex,
  //       isCheck: this.state.isCheck
  //     };
  //     let mainScreen = this.props.navigation.getParam('mainScreen');
  //     if (this.isAdd) {
  //       mainScreen.addEntry(newEntry);
  //     } else {
  //       newEntry.key = this.entryToUpdate.key;
  //       mainScreen.updateEntry(newEntry);
  //     }
  //     this.props.navigation.goBack();
  //   }

  render() {
    console.log(this.movie);
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(this.movie)}
          renderItem={({ item }) => 
          <Text>{item} : {this.movie[item]}</Text>}
        />
      </View>
    );
  }
}
