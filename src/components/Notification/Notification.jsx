// import PropTypes from 'prop-types';

// import exact from 'prop-types-exact';

import css from './Notification.module.css';

// компонент профіля
export default function Notification({massage}) {
  return (
                   <h4 className={css.massage}>{massage}</h4>
           );
}
// // прототайпи
// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,

//   stats: PropTypes.exact({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
// //   }),
// };
