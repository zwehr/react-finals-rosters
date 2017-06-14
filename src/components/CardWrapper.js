import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import cavs from '../json/cavs';
import warriors from '../json/warriors';

class CardWrapper extends Component {
  render() {
    return (
      <div className="cardWrapper">
        <PlayerCard roster={cavs} team="Cleveland Cavaliers" class="cavsCard" />
        <PlayerCard roster={warriors} team="Golden State Warriors" class="warriorsCard" />
      </div>
    );
  }
}

export default CardWrapper;
