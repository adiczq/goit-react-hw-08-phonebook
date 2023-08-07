import React from 'react';
import css from './Home.module.css';

const Home = () => (
  <div className={css.container}>
    <h1 className={css.title}>
      {' '}
      Phonebooks welcome page{' '}
      <span role="img" aria-label="Greeting icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);
export default Home;
