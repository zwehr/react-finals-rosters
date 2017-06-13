import React, { Component } from 'react';
import PlayerPhoto from './PlayerPhoto';
import PlayerInfo from './PlayerInfo';

class PlayerCard extends Component {
  render() {
    return (
      <div className="playerCard">
        from PlayerCard component, rendering:
        <PlayerPhoto />
        <PlayerInfo />
      </div>
    )
  }
}

export default PlayerCard;
