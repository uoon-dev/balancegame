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
    let {e, type, key} = value;
    let newOption = { ...this.state.options };
    let optionValue;
    if (e.key === 'Enter') {
      if (key < newOption[type].length) {
        console.log(key, newOption[type].length);
      }

      optionValue = [...newOption[type]];
      
      const newKey = optionValue[optionValue.length - 1].key + 1;
      optionValue = optionValue.concat({key: newKey, text: ''});
      newOption[type] = optionValue;

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
            type='sec'
            />
        </article>
      </section>
    )
  }
}

export default ChoiceBuilder;