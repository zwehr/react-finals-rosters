import React, { Component } from 'react';

class PlayerStats extends Component {
  render() {
    return (
      <div className="stats">
        <h4>Stats*</h4>
        <p className="singleStat">Minutes: {this.props.minutes}</p>
        <p className="singleStat">Points: {this.props.points}</p>
        <p className="singleStat">Rebounds: {this.props.rebounds}</p>
        <p className="singleStat">Assists: {this.props.assists}</p>
        <p className="statsNote">*per game for the 2017-17 regular season</p>
      </div>
    );
  }
}

export default PlayerStats;
