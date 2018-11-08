import React from 'react';

import classes from './Title.module.css';

const Title = (props) => {
  return (
    <div className={classes.Title}>
      <h1 className={classes.MainTitle}>선택지</h1>
      <input onChange={props.changed}></input>
    </div>
  )
}

export default Title;