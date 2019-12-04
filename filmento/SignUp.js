import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Firebase from './Firebase';


export class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName:'',
            username:'',
            email: '',
            password: ''
        }
      }

      handleSignUp = () => {
        const { email, password } = this.state
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('MovieCollection'))
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/email-already-in-use') {
                  alert('This email is already in use. Please sign in.');
                } else {
                  alert(errorMessage);
                }
                console.log(error);
              });
    }

      render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.firstName}
                    onChangeText={firstName => this.setState({ firstName })}
                    placeholder='First Name'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.lastName}
                    onChangeText={lastName => this.setState({ lastName })}
                    placeholder='Last Name'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                    placeholder='Create Your Username'
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
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
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
    buttonSignup: {
        fontSize: 12
    }
})