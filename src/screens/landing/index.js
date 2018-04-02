import React from 'react'
import { Text, View, TextInput, Label, TouchableHighlight } from 'react-native'
import styles from './styles'
import firebase from 'firebase'

export default class Landing extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            signinEmail: '',
            signinPassword: '',
            signupEmail: '',
            signupPassword: '',
            signupConfirmPassword: '',            
            username: '',
        }
    }
    signup() {
        if (this.state.signupPassword == this.state.signupConfirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(this.state.signupEmail, this.state.signupPassword)
            .then(res => {
                let uid = res.uid
                let userInfo = {
                    username: this.state.signupUsername
                }
                firebase.database().ref('userInformation/').child(uid).set(userInfo)
                console.log('this user is', uid)
            })
            .catch(res => {
                console.log('error ', res)

            })
        }
    }
    signin() {
        firebase.auth().signInWithEmailAndPassword(this.state.signinEmail, this.state.signinPassword)
        .then(res => {
            console.log(res)
            let uid = res.uid
        })
        .catch(res => {
        console.log('error ', res.code)
        })
    }
    render() {
        return (
            <View>
                <View style={styles.view}>
                    <Text>Signup!</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ signupEmail: text })}
                        placeholder={'Email'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ signupUsername: text })}
                        placeholder={'Username'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ signupPassword: text })}
                        secureTextEntry={true}
                        placeholder={'Password'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ signupConfirmPassword: text })}
                        secureTextEntry={true}
                        placeholder={'Confirm Password'}
                    />
                    <TouchableHighlight
                        style={styles.btn}
                        onPress={() => this.signup()}>
                        <Text style={styles.text}>Signup</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.view}>
                    <Text>Signin!</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ signinEmail: text })}
                        placeholder={'Email'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ signinPassword: text })}
                        secureTextEntry={true}
                        placeholder={'Password'}
                    />
                    <TouchableHighlight
                        style={styles.btn}
                        onPress={() => this.signin()}>
                        <Text style={styles.text}>Signin</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}