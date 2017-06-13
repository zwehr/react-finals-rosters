import React, { Component } from 'react';
import cavs from '../json/cavs';
import warriors from '../json/warriors';
import PlayerCard from './PlayerCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>2017 NBA Finals Rosters</h1>
        <h2>Preview matchups and see stats.</h2>
        <PlayerCard />
        <PlayerCard />
      </div>
    );
  }
}

export default App;
