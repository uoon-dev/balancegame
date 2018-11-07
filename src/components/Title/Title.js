import React from 'react';

import classes from './Title.module.css';

const Title = (props) => {
  return (
    <div className={classes.Title}>
      <input onChange={props.changed}></input>
    </div>
  )
}

export default Title;