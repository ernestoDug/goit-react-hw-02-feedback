// import PropTypes from 'prop-types';
// npm i prop-types

// // npm i prop-types-exact

// import { Component } from 'react';
// import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

import css from './Section.module.css';

// import Statistics from 'components/Statistics/Statistics';
// import textBtn from 'components/Section/data/textBtn.js';

// import Notification from 'components/Notification/Notification';

const Section = ({title}) => {
        
    return (
      <section className={css.wrap}>
        <h3>{title}</h3>
       </section>
)}
       
//         <ul className={css.list}>
//           {/* умова рендеру статистики */}
//           {this.state.good > 0 ||
//           this.state.neutral > 0 ||
//           this.state.bad > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification massage={'Поки відгуків немає'} />
//           )}
//         </ul>
//         <div className={css.feedBackWr}>
//           {/* добре */}
//           <FeedbackOptions
//             options={textBtn[0]}
//             onLeaveFeedback={this.handleClickGood}
//           />

//           {/* Сеореднє */}
//           <FeedbackOptions
//             options={textBtn[1]}
//             onLeaveFeedback={this.handleClickNeutr}
//           />

//           {/* погано */}
//           <FeedbackOptions
//             options={textBtn[2]}
//             onLeaveFeedback={this.handleClickBad}
//           />
//         </div>
 
//     );
//   }
// }

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

export default Section;
