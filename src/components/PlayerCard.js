import React, { Component } from 'react';
import PlayerPhoto from './PlayerPhoto';
import PlayerInfo from './PlayerInfo';
import PlayerStats from './PlayerStats';

class PlayerCard extends Component {
  constructor() {
    super();
    this.state = {
      playerIndex: 0
    };
  }

  handleClickBack() {
    let currentIndex = this.state.playerIndex;
    if (currentIndex === 0) {
      this.setState({
        playerIndex: 14
      });
    } else {
      this.setState({
        playerIndex: --currentIndex
      })
    }
  }

  handleClickForward() {
    let currentIndex = this.state.playerIndex;
    if (currentIndex === 14) {
      this.setState({
        playerIndex: 0
      });
    } else {
      this.setState({
        playerIndex: ++currentIndex
      });
    }
  }

  render() {
    let player = this.props.roster[this.state.playerIndex];

    let playerName = player.name;
    let playerPhoto = player.img;
    let playerNumber = player.number;
    let playerPosition = player.position;
    let mpg = player.stats.minutes;
    let ppg = player.stats.points;
    let rpg = player.stats.rebounds;
    let apg = player.stats.assists;

    return (
      <div className="playerCard">
        <h2 className="teamName">{this.props.team}</h2>
        <PlayerPhoto photo={playerPhoto} name={playerName} />
        <div className="arrows">
          <i onClick={this.handleClickBack.bind(this)} className="fa fa-arrow-left" aria-hidden="true"></i>
          <i onClick={this.handleClickForward.bind(this)} className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
        <PlayerInfo name={playerName} number={playerNumber} position={playerPosition} />
        <PlayerStats minutes={mpg} points={ppg} rebounds={rpg} assists={apg} />
      </div>
    );
  }
}

export default PlayerCard;
