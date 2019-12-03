import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

export class MovieCollectionPage extends React.Component {
    constructor(props) {
        super(props);

      }



      render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Add'
                    onPress={()=>this.props.navigation.navigate('AddMovieToCollection')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

})