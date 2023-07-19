// import PropTypes from 'prop-types';

// import { Component } from 'react';
import css from './BattonG.module.css';

// function handleClick(ev) {
// console.log(ev)
// }

const FeedbackOptions = ({text, handleClick}) =>

   (  <div className={css.feedBackWr}>  
  <button className={css.Btn}
  onClick= {this.handleClickGood}
  >
    Добре
  </button>
  
  <button className={css.Btn}
  onClick= {this.handleClickNeutr}
  >
    Середнє
  </button>
  
  <button className={css.Btn}
  onClick= {this.handleClickBad}
  >
    Погано
  </button>
  
  </div> 
  )




export default FeedbackOptions;
