import React from 'react';

import classes from './Title.module.css';

const Title = (props) => {
  let title = '';
  const isDisplay = props.votedCount >= 0;
  if (props.title) {
    title = props.title;
  }
  return (
    <div className={classes.Title}>
      <h1 className={classes.MainTitle}>선택지</h1>
      <input 
        onChange={(e) => props.changed(e, props.type)} 
        value={title || ''}
        readOnly={isDisplay}></input>
    </div>
  )
}

export default Title;