// import PropTypes from 'prop-types';
// npm i prop-types

// import exact from 'prop-types-exact';
// // npm i prop-types-exact

import BattonG from './BattonG/BattonG';

import css from './Feedback.module.css';

// компонент друзі
const Feedback = ({total})=> {

  return (
    <div >
        <p>Ваші враження</p>
       <ul className={css.list}>Статистика ваших вражень
<li>Добре {total}</li>
<li>Середнє</li>
<li>Погано</li>
       </ul>
   <div className={css.feedBackWr}>  
<BattonG
text={"Добре"}
/>

<BattonG
text={"Середнє"}
/>

<BattonG
text={"Погано"}
/>
</div> 
    </div>
  );
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
