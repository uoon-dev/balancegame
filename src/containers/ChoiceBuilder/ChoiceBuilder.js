import React, { Component } from 'react';

import classes from './ChoiceBuilder.module.css';
import Title from '../../components/Title/Title';
import Options from '../../components/Options/Options';
import axios from '../../axios-choice';

class ChoiceBuilder extends Component {
  state = {
    choices: [
      {
        choiceIndex: 0,
        title: ''
      },
      {
        choiceIndex: 1,
        title: ''
      }
    ],
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
    },
    votedCount: -1
  }

  componentDidMount() {
    this.props.setClick(this.saveChoices);
    if (!(this.props.match.path === '/display')) {
      this.props.updateShowBtn();
    } else {
      axios.get('/8b7cba7d-048e-4455-816e-38c414dcb6d6')
        .then(response => {
          const choices = response.data.data.choices;
          this.setState({
            choices: choices
          })
          this.setState({
            votedCount: response.data.data.votedCount
          })
        })
        .catch(error => {
          console.log(error);
        })
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
    let {type, id} = value;
    let newOption = { ...this.state.options };
    newOption[type] = newOption[type].filter((value) => value.key !== id);
    this.setState({
      options: newOption
    });
  }

  optionKeyHandler = (value) => {
    let {e, id} = value;
    switch (e.type) {
      case 'keydown':
        if (e.target.value.length === 0 && id > 1 && e.key === 'Backspace' ) {
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

  updateOption = (value) => {
    let {e, type, id} = value;
    let newOption = { ...this.state.options };
    newOption[type][id - 1].text = e.target.value;
    this.setState({
      options: newOption
    });
  }

  updateTitle = (e, type) => {
    const newChoices = [ ...this.state.choices ];
    (type === 'fst') ? 
      newChoices[0].title = e.target.value :
      newChoices[1].title = e.target.value;
    this.setState({
      choices: newChoices
    })
  }

  saveChoices = () => {
    const newChoices = [ ...this.state.choices ];
    newChoices.forEach((choice, index) => {
      const type = index === 0 ? 'fst' : 'sec';
      const options = [...this.state.options[type]];
      const texts = options.map(value => value.text);
      newChoices[index].options = texts;
    })
    this.setState({
      choices: newChoices
    })
    const result = {
      choices: []
    };
    result.choices = newChoices;
    axios.post('/', result)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    return (
      <section className={classes.ChoiceBuilder}>
        <article>
          <Title 
            changed={this.updateTitle} 
            type='fst' 
            title={this.state.choices[0].title}
            votedCount={this.state.votedCount}/>
          <Options
            options={this.state.options} 
            addNewOption={this.addNewOption}
            changed={this.updateOption}
            optionKeyHandler={this.optionKeyHandler}
            type='fst'
            votedCount={this.state.votedCount}
            displayedOptions={this.state.choices[0]}
            />
        </article>
        <span className={classes.Versus}>vs</span>
        <article>
          <Title 
            changed={this.updateTitle} 
            type='sec' 
            title={this.state.choices[1].title}
            votedCount={this.state.votedCount}/>
          <Options
            options={this.state.options} 
            addNewOption={this.addNewOption}
            changed={this.updateOption}
            optionKeyHandler={this.optionKeyHandler}
            type='sec'
            votedCount={this.state.votedCount}
            displayedOptions={this.state.choices[0]}
            />
        </article>
      </section>
    )
  }
}

export default ChoiceBuilder;