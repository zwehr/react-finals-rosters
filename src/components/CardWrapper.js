import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import cavs from '../json/cavs';
import warriors from '../json/warriors';

class CardWrapper extends Component {
  render() {
    return (
      <div className="cardWrapper">
        <PlayerCard team="Cleveland Cavaliers" roster={cavs}/>
        <PlayerCard team="Golden State Warriors" roster={warriors}/>
      </div>
    );
  }
}

export default CardWrapper;
