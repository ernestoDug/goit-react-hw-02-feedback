// import PropTypes from 'prop-types';
// npm i prop-types

// import exact from 'prop-types-exact';
// // npm i prop-types-exact

// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Component } from 'react';

import css from './Feedback.module.css';

// import css from './BattonG.module.css';


// const Feedback = ({total})=> {
  class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,

    }
    // добре
    handleClickGood = (event) => {
      // console.log(this, "1");
      this.setState((prevState) => 
 ({
  good: prevState.good+1
        })     
      )
          }
// нейтрально
          handleClickNeutr = (event) => {
            // console.log(this, "2");
            this.setState((prevState) => {
              return {
                neutral: prevState.neutral+1
              }      
            });
                }
                // погано
                handleClickBad = (event) => {
                  this.setState((prevState) => {
                    this.countTotalFeedback(this.state.bad)
              // console.log( prevState.bad, "3");
              return { 
                bad: prevState.bad+1
              }      
            });
                }

                // всього
                countTotalFeedback = () => {
        return `${this.state.good +  this.state.bad + this.state.neutral}`
                              }
                  
                countPositiveFeedbackPercentage = () =>      {
                  return  Math.round(`${ this.state.good*100  / `${this.countTotalFeedback()}`}`)
                }
  render() {
  return ( <div >
        <p>Ваші враження</p>
       <ul className={css.list}>Статистика ваших вражень
<li>Добре {this.state.good}</li>
<li>Середнє {this.state.neutral} </li>
<li>Погано {this.state.bad} </li>
<li> Всього {this.countTotalFeedback()}   </li>
 {this.state.good >= 1 &&  (<li> Доля гарних відгуків   {this.countPositiveFeedbackPercentage()}%   </li>)}
{/* <li> Доля гарних відгуків   {this.countPositiveFeedbackPercentage()}  </li> */}
       </ul>
          <div className={css.feedBackWr}>  
<button type='button' className={css.Btn}
onClick=  {this.handleClickGood}
>
  Добре
</button>

<button type='button' className={css.Btn}
onClick= {this.handleClickNeutr}
>
  Середнє
</button>

<button type='button' className={css.Btn}
onClick= {this.handleClickBad}
>
  Погано
</button>

</div> 
    </div>
  );
  }
};

// // прототайпи
// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };

export default Feedback;
