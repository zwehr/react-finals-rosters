import React, { Component } from 'react';

class PlayerPhoto extends Component {
  render() {
    return (
      <div className="PlayerPhoto">
        <img src={this.props.photo} alt={this.props.name} />
      </div>
    )
  }
}

export default PlayerPhoto;
