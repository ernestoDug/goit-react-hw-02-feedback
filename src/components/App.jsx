// import ReactDOM from 'react-dom/client';
// npm install prop-types;

import React from 'react';


// import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';

import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import css from './Section/Section.module.css';

// import Statistics from 'components/Statistics/Statistics';
import textBtn from 'components/Section/data/textBtn.js';

import Notification from 'components/Notification/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // добре
  handleClickGood = event => {
    // console.log(this, "1");
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  // нейтрально
  handleClickNeutr = event => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  // погано
  handleClickBad = event => {
    this.setState(prevState => {
      this.countTotalFeedback(this.state.bad);

      return {
        bad: prevState.bad + 1,
      };
    });
  };
  // всього
  countTotalFeedback = () => {
    return `${this.state.good + this.state.bad + this.state.neutral}`;
  };
  // відсоток гарних
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      `${(this.state.good * 100) / `${this.countTotalFeedback()}`}`
    );
  };

  render() {
    return (
      <div> 
      <Section title="Ваші Враження" 
      />
            <Section/>

      <Section title="Статистика ваших вражень" 
      />
       {/* умова рендеру статистики */}
       {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0 ? (
            <Statistics
                good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification massage={'Поки відгуків немає'} />
          )}
      <Section/>

      <Section title="" 
      />
<div className={css.feedBackWr}>
          {/* добре */}
          <FeedbackOptions
            options={textBtn[0]}
            onLeaveFeedback={this.handleClickGood}
          />

          {/* Сеореднє */}
          <FeedbackOptions
            options={textBtn[1]}
            onLeaveFeedback={this.handleClickNeutr}
          />

          {/* погано */}
          <FeedbackOptions
            options={textBtn[2]}
            onLeaveFeedback={this.handleClickBad}
          />
        </div>

            <Section/>

</div>
    )
  }
            
}

export  {App};




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         // display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
// <Section title="Ваші враження"/>
      
//     </div>
//   );
// };
