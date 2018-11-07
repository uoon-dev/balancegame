import React from 'react';

import classes from './Options.module.css';
import Option from '../Option/Option';

const options = (props) => {
  return (
    <div className={classes.Options}>
      <Option
        childOptions={props.type === 'A' ? props.options.fst : props.options.sec}
        addNewOption={props.addNewOption} 
        updateOption={props.updateOption}
        type={props.type}></Option>
    </div>
  )
}

export default options;