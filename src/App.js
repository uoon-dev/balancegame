import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.module.css';

import ChoiceBuilder from './containers/ChoiceBuilder/ChoiceBuilder';

class App extends Component {
  state = {
    showBtn: false
  }

  updateShowBtn = () => {
    this.setState({
      showBtn: true
    })
  }

  render() {
    const MyChoiceBuilder = (props) => (
        <ChoiceBuilder 
          setClick={click => this.saveChoices = click}
          showBtn={this.state.showBtn}
          updateShowBtn={this.updateShowBtn}
          {...props}/>
      )

    let saveBtn;

    if (this.state.showBtn) {
      saveBtn = (
        <button 
        className={classes.Submit}
        onClick={() => this.saveChoices()}>등록하기</button>
      )
    }

     return (
      <div className={classes.App}>
        <Switch>
          <Route path="/" exact render={MyChoiceBuilder} />
          <Route path="/display" render={MyChoiceBuilder} />
        </Switch>
        {saveBtn}
      </div>
    );
  }
}

export default App;
