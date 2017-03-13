import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import mainBackground from '../img/highscore.png'

var {width, height} = require('Dimensions').get('window');

export default class Highscore extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View>
        <View style={styles.allscreen1}></View>
        <View style={styles.allscreen2}></View>
        <View style={styles.containerCenter}>
          <Image style={styles.latar} source={mainBackground} />
          <View style={styles.containerButton}>
            <TouchableOpacity  onPress={() => {this.props.navigator.popN(3: 1)}}>
              <Text style={styles.buttonPlay}>Go Home!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({

  allscreen1: {
    backgroundColor: '#59B7FF',
    height:height/2,
    width:width,
  },
  allscreen2: {
    backgroundColor: '#3E2D1D',
    height:height/2,
    width:width,
  },
  containerCenter: {
    position:'absolute',
  },
  containerButton: {
    width:width,
    height:height,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
  },
  latar: {
    marginTop:height/4,
    width: width,
    height: width * (3/4),
  },
  buttonPlay: {
    marginTop:height/3.5,
    fontSize: width/30,
    fontWeight: 'bold',
    color:'#FFFFFF',
    fontFamily:'monospace',
    backgroundColor: '#75C4FF',
    padding:width/70,
    borderRadius: width/50,
  },
});
