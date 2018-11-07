import React, { Component } from 'react';

import classes from './Option.module.css';
class Option extends Component {
  constructor(props) {
    super(props);
    this.optionInput = [];
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput = (key) => {
    this.optionInput[key].current.focus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.childOptions.length !== this.props.childOptions.length) {
      const key = this.props.childOptions[this.props.childOptions.length - 1].key;
      this.focusTextInput(key);
    }
    return true;
  }

  render() {
    let transformedOption;

    if (this.props.childOptions) {
      transformedOption = this.props.childOptions.map(option => {
        this.optionInput[option.key] = React.createRef();
        return (
          <input
            onKeyDown={(e) => this.props.addNewOption({ e, type: this.props.type, key: option.key})}
            onChange={this.props.updateOption}
            key={option.key} 
            ref={this.optionInput[option.key]}></input>
        )      
      })
    }

    return (
      <div className={classes.Option}>
        {transformedOption}
      </div>
    )
  }
}

export default Option;