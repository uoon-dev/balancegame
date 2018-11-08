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
          text: 'fst'
        }
      ],
      sec: [
        {
          key: 1,
          text: 'sec'
        }
      ]
    }
  }

  addNewOption = (value) => {
    let {type} = value;
    let newOption = { ...this.state.options };
    let optionValue;

    if (newOption[type].length < 7 ) {
      optionValue = [...newOption[type]];
      
      const newKey = optionValue[optionValue.length - 1].key + 1;
      optionValue = optionValue.concat({key: newKey, text: ''});
      newOption[type] = optionValue;
  
      this.setState({
        options: newOption
      });
    }

  }

  removeOption = (value) => {
    let {type, index} = value;
    let newOption = { ...this.state.options };
    newOption[type] = newOption[type].filter((value) => value.key !== index);
    this.setState({
      options: newOption
    });
  }

  optionKeyHandler = (value) => {
    let {e, index} = value;
    switch (e.type) {
      case 'keydown':
        if (e.target.value.length === 0 && index > 1 && e.key === 'Backspace' ) {
          this.removeOption(value);
        }
        break;
      case 'keypress':
        if (e.key === 'Enter') {
          this.addNewOption(value);
        }
        break;
      default:
        break;
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
            optionKeyHandler={this.optionKeyHandler}
            type='fst'
            />
        </article>
        <span className={classes.Versus}>vs</span>
        <article>
          <Title />
          <Options
            options={this.state.options} 
            addNewOption={this.addNewOption}
            changed={this.updateOption}
            optionKeyHandler={this.optionKeyHandler}
            type='sec'
            />
        </article>
      </section>
    )
  }
}

export default ChoiceBuilder;