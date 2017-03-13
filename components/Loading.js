import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import mainBackground from '../img/comment.gif'

var {width, height} = require('Dimensions').get('window');

export default class Loading extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    const appThis = this;
    setTimeout(function(){
      appThis.props.navigator.push({index:1})
    }, 3000);
  }
  render() {
    return (
      <View style={styles.allscreen}>
          <Image style={styles.latar} source={mainBackground} />
          <Text style={styles.Thanks}>Please Wait</Text>
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
    fontSize: width/18,
    textAlign: 'center',
    position: 'absolute',
  },
  latar: {
    marginRight: height/3.7 ,
    marginBottom: height/10,
    width: width/7,
    height: width/7,
  },
});
