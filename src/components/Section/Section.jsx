import PropTypes from 'prop-types';
// npm i prop-types

import css from './Section.module.css';

const Section = ({ title }) => {
  return (
    <section className={css.wrap}>
      <h3>{title}</h3>
    </section>
  );
};

// прототайпи

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
