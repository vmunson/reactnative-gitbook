import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import * as firebase from 'firebase'

export default class Inbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.userInfo = this.props.navigation.state.params.userInfo    
    }
    render() {
        return (
            <View>
                <Text>Welcome to the inbox page</Text>
            </View>
        )
    }
}