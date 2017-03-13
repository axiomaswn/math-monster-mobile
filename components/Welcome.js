import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import mainBackground from '../img/cats.jpg'

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
      appThis.props.navigator.push({index:3})
    }, 2500);
  }
  render() {
    return (
      <View style={styles.allscreen}>
          <Image style={styles.latar} source={mainBackground} />
          <Text style={styles.Thanks}>Created by Yoma Sofwan, 2017</Text>
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
    fontSize: width/35,
    textAlign: 'center',
    marginTop: height/1.2 ,
  },
  latar: {
    position:'absolute',
    width: width/1.5,
    height: width/1.5 * (7/8),
  },
});
