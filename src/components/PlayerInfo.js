import React, { Component } from 'react';

class PlayerInfo extends Component {
  render() {
    return (
      <div className="playerInfo">
        <h3>{this.props.name}</h3>
        <p className="numberAndName">#{this.props.number} - {this.props.position}</p>
      </div>
    )
  }
}

export default PlayerInfo;
