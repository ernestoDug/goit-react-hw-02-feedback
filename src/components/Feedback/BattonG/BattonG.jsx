// import PropTypes from 'prop-types';

import { Component } from 'react';
import css from './BattonG.module.css';

  class BattonG extends Component {
  state = {
    value: 0
  }


render(){
  return(
      <button 
    className={css.Btn}
        // onClick={handleClick}
  
        >{0}
  
    </button>)


}
  }
  


// function handleClick(ev) {
// console.log(ev)
// }

// const BattonG = ({text}) =>
// {
//   return <button 
//   className={css.Btn}
//       onClick={handleClick}

  
//   >{text}

//   </button>
// }



export default BattonG;
