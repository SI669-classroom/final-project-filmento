import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native';
import Firebase from './Firebase';



export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
      }

    handleLogin = () => {
        

        Firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('MovieCollection', {UID:this.state.email}))
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/user-not-found') {
                  alert('The email does not exist. Please sign up.');
                } else if(errorCode == 'auth/wrong-password'){
                  alert('Wrong Password');
                }else{
                    alert(errorMessage);
                }
                console.log(error);
              });
    }
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    style={{margin:50}}
                    source={require('./images/logo.png')}
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Button title="Sign Up" style={{color:''}}
                onPress={() => this.props.navigation.navigate('SignUp')}/>
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
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

})
