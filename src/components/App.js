import React, { Component } from 'react';
import CardWrapper from './CardWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>2017 NBA Finals Rosters</h1>
        <h2>Preview matchups and see stats.</h2>
        <CardWrapper />
      </div>
    );
  }
}

export default App;
