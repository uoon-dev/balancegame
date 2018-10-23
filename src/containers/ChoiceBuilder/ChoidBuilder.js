import React, { Component } from 'react';

import classes from './ChiceBuilder.module.css';
import Title from '../../components/Title/Title';
import Options from '../../components/Options/Options';

class ChoiceBuilder extends Component {
  state = {

  }

  render() {
    return (
      <section className={classes.ChoiceBuilder}>
        <article>
          <Title />
          <Options />
        </article>
        <span>vs</span>
        <article>
          <Title />
          <Options />
        </article>
      </section>
    )
  }
}

export default ChoiceBuilder;