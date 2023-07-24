// import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <button className={css.Btn} onClick={onLeaveFeedback} options={options}>
      {options}
    </button>
  );
};

export default FeedbackOptions;
