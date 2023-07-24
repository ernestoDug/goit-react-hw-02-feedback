import PropTypes from 'prop-types';

import css from './Notification.module.css';

// компонент профіля
export default function Notification({ massage }) {
  return <h4 className={css.massage}>{massage}</h4>;
}
// // прототайпи
Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};
