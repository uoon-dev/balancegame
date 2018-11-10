import React, { Component } from 'react';

import classes from './Option.module.css';
import { FaPlus } from 'react-icons/fa';

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
      setTimeout(() => {
        this.focusTextInput(key);
      }, 50);
    }
    return true;
  }

  render() {
    let transformedOption;
    let voteBtn;
    const isDisplay = this.props.votedCount >= 0;

    if (!isDisplay) {
      if (this.props.childOptions) {
        transformedOption = this.props.childOptions.map((option, index) => {
          this.optionInput[option.key] = React.createRef();
          let addBtn, show;
  
          if (index === this.props.childOptions.length - 1) {
            show = (this.props.childOptions.length) >= 7 ? false : true;
          }
  
          addBtn = (
            <button className={show ? classes.Add : ''} disabled={!show}
              onClick={() => this.props.addNewOption({ type: this.props.type, key: option.key})}>
              <FaPlus size="2em"/>
            </button>
          )
  
          return (
            <div className={classes.InputField} key={option.key}>
              <input
                onKeyPress={(e) => this.props.optionKeyHandler({ e, type: this.props.type, id: option.key })}
                onKeyDown={(e) => this.props.optionKeyHandler({ e, type: this.props.type, id: option.key })}
                onChange={(e) => this.props.updateOption({ e, type: this.props.type, id: option.key })}
                ref={this.optionInput[option.key]}></input>
                {addBtn}
            </div>
          )
        })
      }
    } else {
      transformedOption = this.props.displayedOptions.options.map((option, index) => {
        return (
          <div className={classes.InputField} key={index}>
              <input className={classes.Checkbox} type="checkbox"></input>
              <input value={option || ''} readOnly></input>
          </div>
        )
      })

      voteBtn = (
        <button className={classes.VoteBtn}>투표하기</button>
      )
    }

    return (
      <div className={classes.Option}>
        {transformedOption}
        {voteBtn}
      </div>
    )
  }
}

export default Option;