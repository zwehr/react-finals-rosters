import React, { Component } from 'react';

class PlayerStats extends Component {
  render() {
    return (
      <div className="stats">
        <h4>Stats*</h4>
        <p className="statLine">Minutes: <strong>{this.props.minutes}</strong> |
          Points: <strong>{this.props.points}</strong></p>
        <p className="statLine">Rebounds: <strong>{this.props.rebounds}</strong> |
          Assists: <strong>{this.props.assists}</strong></p>
        <p className="statsNote">*per game for the 2016-17 regular season</p>
      </div>
    );
  }
}

export default PlayerStats;
