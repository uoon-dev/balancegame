import React, { Component } from 'react';

import classes from './ChiceBuilder.module.css';
import Title from '../../components/Title/Title';
import Options from '../../components/Options/Options';

class ChoiceBuilder extends Component {
  state = {
    choices: [],
    options: {
      fst: [
        {
          key: 1,
          text: ''
        }
      ],
      sec: [
        {
          key: 1,
          text: ''
        }
      ]
    }
  }

  addNewOption = (e, type) => {
    let newOption = { ...this.state.options };
    let optionType;
    if (e.key === 'Enter') {
      switch(type) {
        case 'A' : 
          optionType = newOption.fst;
          break;
        case 'B' : 
          optionType = newOption.sec;
          break;
        default: 
          console.error('There is no type.');
          return;
      }
      
      const newKey = optionType[optionType.length - 1].key + 1;
      optionType.push({key: newKey, text: ''});
      this.setState({
        options: newOption
      });
    }
  }

  render() {
    return (
      <section className={classes.ChoiceBuilder}>
        <article>
          <Title />
          <Options
            options={this.state.options} 
            addNewOption={this.addNewOption}
            changed={this.updateOption}
            type='A'
            />
        </article>
        <span className={classes.Versus}>vs</span>
        <article>
          <Title />
          <Options
            options={this.state.options} 
            addNewOption={this.addNewOption}
            changed={this.updateOption}
            type='B'
            />
        </article>
      </section>
    )
  }
}

export default ChoiceBuilder;