import React, { Component } from 'react';
import FightScene from './components/Fight'
import HomeScene from './components/Home'
import LoseScene from './components/Lose'
import WinScene from './components/Win'
import ScoreScene from './components/Highscore'
import ThanksScene from './components/Thanks'
import WelcomeScene from './components/Welcome'
import LoadingScene from './components/Loading'
import {
  AppRegistry,
  Navigator,
  BackAndroid,
} from 'react-native';

export default class singleproject extends Component {
  renderNewScene (route, navigator) {
    if (route.index === 0) {
      return (
        <ThanksScene route={route} navigator={navigator} />
      )
    }
    else if (route.index === 1) {
      return (
        <WelcomeScene route={route} navigator={navigator} />
      )
    }
    else if (route.index === 2) {
      return (
        <LoadingScene route={route} navigator={navigator} />
      )
    }
    else if (route.index === 3) {
      return (
        <HomeScene route={route} navigator={navigator} />
      )
    }
    else if (route.index === 4) {
      return (
        <FightScene route={route} navigator={navigator} />
      )
    }
    else if (route.index === 5) {
      return (
        <WinScene route={route} navigator={navigator} />
      )
    }
    else if (route.index === 6) {
      return (
        <LoseScene route={route} navigator={navigator} />
      )
    }
    else if (route.index === 7) {
      return (
        <ScoreScene route={route} navigator={navigator} />
      )
    }
  }

  render() {
    const appThis = this
    // BackAndroid.addEventListener('hardwareBackPress', function() {
    //   console.log('makan');
    //   return true;
    // })
    return (

      <Navigator
        initialRoute={{index: 3 }}
        renderScene={appThis.renderNewScene}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FadeAndroid}
      />
    )
  }
}

AppRegistry.registerComponent('singleproject', () => singleproject);
