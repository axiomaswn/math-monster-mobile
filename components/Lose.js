import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import mainBackground from '../img/lose.png'

var {width, height} = require('Dimensions').get('window');

export default class Lose extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount(){
    const appThis = this;
    setTimeout(function(){
      appThis.props.navigator.push({index:7})
    }, 4000);
  }
  render() {
    return (
      <View style={styles.allscreen}>
        <View style={styles.containerCenter}>
          <Image style={styles.latar} source={mainBackground} />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  allscreen: {
    backgroundColor: '#231F20',
    height:height,
    width:width,
  },
  containerCenter: {
    position:'absolute',
  },
  latar: {
    marginTop:height/4,
    width: width,
    height: width * (3/4),
  },
});
