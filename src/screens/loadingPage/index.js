import React, { Component } from 'react';
import commonColor from '../../../themes/commonColor';
import firebase from 'firebase';
import { View, ActivityIndicator } from 'react-native';

export default class LoadingScreen extends Component {
    componentDidMount = async () => {
        await firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let uid = user.uid
                firebase.database().ref('userInformation').child(uid).child('profImage').once('value')
                    .then(res => {
                        if (res) {
                            this.props.navigation.navigate('Home', { uid })
                        } else {
                            this.props.navigation.navigate('FinishProfile', { uid })
                        }
                    })
            } else {
                this.props.navigation.navigate('Login')
            }
        })
    }
    render = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator
                    size="large"
                    color={commonColor.brandPrimary}
                />
            </View>
        )
    }
}