import React from 'react';

import classes from './Options.module.css';
import Option from '../Option/Option';

const options = (props) => {
  return (
    <div className={classes.Options}>
      <h3>옵션</h3>
      <Option
        childOptions={props.type === 'fst' ? props.options.fst : props.options.sec}
        addNewOption={props.addNewOption}
        updateOption={props.updateOption}
        optionKeyHandler={props.optionKeyHandler}
        type={props.type}></Option>
    </div>
  )
}

export default options;