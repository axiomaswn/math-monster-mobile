import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import hutan from '../img/forest.png'
import player from '../img/player.gif'
import monster from '../img/monster.gif'

var {width, height} = require('Dimensions').get('window');
var SIZE          = 4;
var CELL_SIZE     = Math.floor(width * .15);
var CELL_PADDING  = Math.floor(CELL_SIZE * .05);
var BORDER_RADIUS = 20;
var TILE_SIZE     = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE   = Math.floor(TILE_SIZE * .35);

export default class Fight extends Component {
  constructor (props) {
    super(props)
    this.state = {
      txtEnergyPlayer  : 800,
      txtEnergyMonster : 1200,
    }
  }

  componentWillMount(){
    console.log('will');
    const firstSetX = Math.floor((Math.random() * 100) + 20);
    const firstSetY = Math.floor((Math.random() * 100) + 20);
    const firstSetZ = firstSetX + firstSetY;
    this.setState({
      angkaPertama : firstSetX,
      angkaKedua   : firstSetY,
      angkaHasil   : firstSetZ,
    });
  }

  handleClick (number) {
    let currentWinner = '';
    const currentHit = (Math.floor((Math.random() * 120) + 40));
    if (number === this.state.angkaHasil) {
      if (this.state.txtEnergyMonster-currentHit <= 0) {
        this.setState({
          txtEnergyMonster : 0,
        });
      }
      else {
        this.setState({
          txtEnergyMonster : this.state.txtEnergyMonster-currentHit,
        });
      }

    }
    else {
      if (this.state.txtEnergyPlayer-currentHit <= 0) {
        this.setState({
          txtEnergyPlayer : 0,
        });
      }
      else {
        this.setState({
          txtEnergyPlayer : this.state.txtEnergyPlayer-currentHit,
        });
      }

    }
    const currentAngkaX = Math.floor((Math.random() * 100) + 20);
    const currentAngkaY = Math.floor((Math.random() * 100) + 20);
    const currentAngkaZ = currentAngkaX + currentAngkaY;
    this.setState({
      angkaPertama : currentAngkaX,
      angkaKedua : currentAngkaY,
      angkaHasil : currentAngkaZ,
    });
    const _this = this
    setTimeout(_this.checkWinner.bind(_this), 300)
  }

  checkWinner () {
    if (this.state.txtEnergyMonster <= 0 && this.state.txtEnergyPlayer > 0) {
      console.log('menang');
      this.props.navigator.push({index: 5})
    }
    else if (this.state.txtEnergyPlayer <= 0 && this.state.txtEnergyMonster > 0){
      console.log('kalah');
      this.props.navigator.push({index: 6})
    }
  }

  renderTiles() {
    var arrResult = [];
    var arrHasil  = [];
    arrHasil.push(this.state.angkaHasil);
    while(arrHasil.length < 16){
        var randomnumber = Math.floor((Math.random() * 200) + 40)
        if(arrHasil.indexOf(randomnumber) > -1) continue;
        arrHasil[arrHasil.length] = randomnumber;
    }
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    arrHasil=shuffle(arrHasil);

    var temp = 0;
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        var key = row * SIZE + col;
        var number = arrHasil[temp++];
        var position = {
          left: col * CELL_SIZE + CELL_PADDING,
          top: row * CELL_SIZE + CELL_PADDING
        };
        arrResult.push(
          <View key={key} style={[styles.tile, position]}>
            <TouchableOpacity onPress={this.handleClick.bind(this, number)}>
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
    return arrResult;
  }

  render() {
    return (
      <View style={styles.allscreen}>
        <View style={styles.barHealth}>
          <Text style={styles.txtEnergyPlayer}>Player {this.state.txtEnergyPlayer}</Text>
          <Text style={styles.txtEnergyMonster}>Monster {this.state.txtEnergyMonster}</Text>
        </View>
        <View style={styles.containerPlayerMonster}>
          <Image style={styles.latar} source={hutan} />
          <View style={styles.karakter}>
            <Image style={styles.karakterplayer} source={player} />
            <Image style={styles.karaktermonster} source={monster} />
          </View>
        </View>
        <View style={styles.containerQuestionAnswer}>
          <Text style={styles.question}>{this.state.angkaPertama} + {this.state.angkaKedua} = ?</Text>
          <View style={styles.board}>
            {this.renderTiles()}
          </View>
        </View>
    </View>
    );
  }
}



var styles = StyleSheet.create({
  allscreen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  containerPlayerMonster: {
    backgroundColor: '#FFFFFF',
  },
  containerQuestionAnswer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  barHealth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: width/60,
    width: '100%',
  },
  karakter: {
    marginTop: width/5,
    width: width,
    height: (width/10)*1.425,
    position:'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: width/8,
    width: '100%',
  },
  txtEnergyPlayer: {
    fontSize: LETTER_SIZE,
    fontWeight: 'bold',
    fontFamily:'monospace',
  },
  txtEnergyMonster: {
    fontSize: LETTER_SIZE,
    fontWeight: 'bold',
    fontFamily:'monospace',
  },
  karakterplayer: {
    width: (width/7),
    height: (width/7)*1.425
  },
  karaktermonster: {
    width: (width/4.5),
    height: (width/4.5)*0.9,
  },
  question: {
    marginTop: width/25,
    marginBottom: width/25,
    fontSize: LETTER_SIZE,
    fontWeight: 'bold',
    fontFamily:'monospace',
    backgroundColor: '#BDBDBD',
    padding:width/30,
    borderRadius: BORDER_RADIUS/2,
  },
  board: {
    width: CELL_SIZE * SIZE,
    height: CELL_SIZE * SIZE,
    borderRadius: width/20,
  },
  tile: {
    position: 'absolute',
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF80AB',
  },
  number: {
    color: '#FFFFFF',
    fontSize: LETTER_SIZE,
    fontWeight: 'bold',
    padding:width/40,
    backgroundColor: 'transparent',
    fontFamily:'monospace',
  },
  latar: {
    width: width,
    height: width * (2.4/4),
  },
});
