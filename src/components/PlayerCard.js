import React, { Component } from 'react';
import PlayerPhoto from './PlayerPhoto';
import PlayerInfo from './PlayerInfo';

class PlayerCard extends Component {
  constructor() {
    super();
    this.state = {
      playerIndex: 0
    };
  }

  render() {
    let playerName = this.props.roster[this.state.playerIndex].name;
    let playerPhoto = this.props.roster[this.state.playerIndex].img;
    let playerNumber = this.props.roster[this.state.playerIndex].number;
    let playerPosition = this.props.roster[this.state.playerIndex].position;
    return (
      <div className="playerCard">
        <PlayerPhoto photo={playerPhoto} name={playerName} />
        <PlayerInfo name={playerName} number={playerNumber} position={playerPosition}/>
      </div>
    );
  }
}

export default PlayerCard;
