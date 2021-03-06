import React from 'react';

import classes from './Options.module.css';
import Option from '../Option/Option';

const options = (props) => {
  return (
    <div className={classes.Options}>
      <h2 className={classes.SubTitle}>옵션</h2>
      <Option
        childOptions={props.type === 'fst' ? props.options.fst : props.options.sec}
        addNewOption={props.addNewOption}
        updateOption={props.changed}
        optionKeyHandler={props.optionKeyHandler}
        type={props.type}
        votedCount={props.votedCount}
        displayedOptions={props.displayedOptions}></Option>
    </div>
  )
}

export default options;