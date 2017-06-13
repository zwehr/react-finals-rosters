import React, { Component } from 'react';
import PlayerPhoto from './PlayerPhoto';
import PlayerInfo from './PlayerInfo';

class PlayerCard extends Component {
  constructor() {
    super();
    this.state = {
      playerIndex: 0
    }
  }

  render() {
    return (
      <div className="playerCard">
        from PlayerCard component, state is {this.state.playerIndex} rendering:
        <PlayerPhoto />
        <PlayerInfo />
      </div>
    )
  }
}

export default PlayerCard;
