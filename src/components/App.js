import React, { Component } from 'react';
import CardWrapper from './CardWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>2017 NBA Finals</h1>
        <p className="appDescription">Use the arrows below to flip through each team's
        players and compare stats and matchups.</p>

        <CardWrapper />

        <p className="appInfo">This app was built with React and emphasizes
        reusability. Each of the two player "cards" above are the same component,
        but they are given different props (JSON data for each team). Clicking
        on either arrow simply increments or decrements an index value held in state.</p>
      </div>
    );
  }
}

export default App;
