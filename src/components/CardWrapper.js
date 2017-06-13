import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import cavs from '../json/cavs';
import warriors from '../json/warriors';

class CardWrapper extends Component {
  render() {
    return (
      <div className="cardWrapper">
        <PlayerCard />
        <PlayerCard />
      </div>
    );
  }
}

export default CardWrapper;
