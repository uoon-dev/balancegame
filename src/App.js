import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.css';

import ChoiceBuilder from './containers/ChoiceBuilder/ChoidBuilder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <ChoiceBuilder setClick={click => this.saveChoices = click}/>
        <button 
          className={classes.Submit}
          onClick={() => this.saveChoices()}>등록하기</button>
      </div>
    );
  }
}

export default App;
