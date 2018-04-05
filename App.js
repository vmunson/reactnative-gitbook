import React from 'react';
import { StackNavigator } from 'react-navigation'

import LoadingScreen from './src/screens/loadingPage'
import FinishProfile from './src/screens/finishProfile'
import Home from './src/screens/home'
import Landing from './src/screens/landing'
import Title from './src/components/title'
import firebase from 'firebase';
import firebaseConfig from './src/firebaseConfig';

firebase.initializeApp(firebaseConfig)
const App = StackNavigator(
  {
    Loading: {screen: LoadingScreen},
    Login: { screen: Landing },
    Home: { screen: Home },
    FinishProfile: { screen: FinishProfile},
  },{
  navigationOptions: {
    header: <Title />}
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none'
  }
)

export default class Main extends React.Component {
  render() {
    return (
      <App />
    )
  }
}