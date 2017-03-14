import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import mainBackground from '../img/main.png'
import runPlayer from '../img/run.gif'
import Sound from 'react-native-sound'
// import menuSound from '../audio/wrong.mp3'

var {width, height} = require('Dimensions').get('window');

export default class Fight extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount(){
    console.log('did');
    var whoosh = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      else {
        console.log('normal');
      }
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    });
    // whoosh.release();
    debugger
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });

  }

  render() {
    return (
      <View>
        <View style={styles.allscreen1}></View>
        <View style={styles.allscreen2}></View>
        <View style={styles.containerCenter}>
          <Image style={styles.latar} source={mainBackground} />
          <View style={styles.containerButton}>
            <TouchableOpacity  onPress={() => {this.props.navigator.push({index: 4})}}>
              <Text style={styles.buttonPlay}>Play!</Text>
            </TouchableOpacity>
          </View>
          <Image style={styles.karakterplayer} source={runPlayer} />
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
    fontSize: width/30,
    fontWeight: 'bold',
    color:'#FFFFFF',
    fontFamily:'monospace',
    backgroundColor: '#75C4FF',
    padding:width/60,
    borderRadius: width/40,
  },
  karakterplayer: {
    marginTop:(height/2),
    marginLeft:(width/4),
    position:'absolute',
    width: (width/7),
    height: (width/7)*1.65
  },
});
