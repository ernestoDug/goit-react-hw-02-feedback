// import PropTypes from 'prop-types';

// import { Component } from 'react';
import css from './FeedbackOptions.module.css';

// function handleClick(ev) {
// console.log(ev)
// }

const FeedbackOptions = ({options, onLeaveFeedback}) =>
{
  return    ( 
  <button className={css.Btn}
  onClick= {onLeaveFeedback}
    options = {options}
  >
    {options}
  </button>
    )

  }


export default FeedbackOptions;
