import React from 'react';

import classes from './Option.module.css';

const option = (props) => {
  let transformedOption;
  if (props.childOptions) {
    transformedOption = props.childOptions.map(option => {
      return (
        <input
          onKeyDown={(e) => props.addNewOption(e, props.type)}
          key={option.key} 
          onChange={props.updateOption}></input>
      )      
    })
  }

  return (
    <div className={classes.Option} key={option.key}>
      {transformedOption}
    </div>
  )
    

}

export default option;