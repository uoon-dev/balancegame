import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChoiceBuilder from './containers/ChoiceBuilder/ChoidBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <ChoiceBuilder />
      </div>
    );
  }
}

export default App;
