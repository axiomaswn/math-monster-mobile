import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var {width, height} = require('Dimensions').get('window');
var SIZE = 4; // four-by-four grid
var CELL_SIZE = Math.floor(width * .15); // 20% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = 80;
var lebar = width;
var tinggi = width * (3/4);
// var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .4);

export default class singleproject extends Component {
  renderTiles() {
    var result = [];
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        var key = row * SIZE + col;
        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var letter = getRandomInt(1, 20);
        // var letter = String.fromCharCode(65 + key);
        var position = {
          left: col * CELL_SIZE + CELL_PADDING,
          top: row * CELL_SIZE + CELL_PADDING
        };
        result.push(
          <View key={key} style={[styles.tile, position]}>
            <Text style={styles.letter}>{letter}</Text>
          </View>
        );
      }
    }
    return result;
  }
  render() {
    return (
      <View style={styles.allscreen}>
        <View style={styles.container}>
          <Text>Math Monster</Text>
          <View style={styles.board}>
            {this.renderTiles()}
          </View>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.latar}
            source={require('./forest.png')}
          />
        </View>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#58B7FF',
  },
  allscreen: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#58B7FF',
  },
  container2: {
    // backgroundColor: 'gray',
    // flex: 2,
  },
  board: {
    marginBottom: 60,
    width: CELL_SIZE * SIZE,
    height: CELL_SIZE * SIZE,
    // backgroundColor: 'gray',
    borderRadius: 5,
  },
  tile: {
    position: 'absolute',
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  letter: {
    color: 'black',
    fontSize: LETTER_SIZE,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  latar: {
    width: lebar,
    height: tinggi,
  },
});

AppRegistry.registerComponent('singleproject', () => singleproject);
