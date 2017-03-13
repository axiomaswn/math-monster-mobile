import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import mainBackground from '../img/hacktiv8.png'

var {width, height} = require('Dimensions').get('window');

export default class Thanks extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount(){
    const appThis = this;
    setTimeout(function(){
      appThis.props.navigator.push({index:2})
    }, 2500);
  }
  render() {
    return (
      <View style={styles.allscreen}>
          <Text style={styles.Thanks}>Thanks To</Text>
          <Image style={styles.latar} source={mainBackground} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  allscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Thanks: {
    fontWeight: 'bold',
    fontFamily:'monospace',
    fontSize: width/20,
    textAlign: 'center',
    marginBottom: width/20,
  },
  latar: {
    width: width/2,
    height: width/2 * (3/4),
  },
});
