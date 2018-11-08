import React from 'react';

import classes from './Title.module.css';

const Title = (props) => {
  return (
    <div className={classes.Title}>
      <h1 className={classes.MainTitle}>선택지</h1>
      <input onChange={(e) => props.changed(e, props.type)}></input>
    </div>
  )
}

export default Title;