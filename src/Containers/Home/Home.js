import React, { useState } from 'react';
import styles from './home.module.css';
import Directions from '../../Components/Directions';
const allPages = ['home', 'about', 'education', 'portfolio', 'contact']

const Home = (props) => {
  const { selected } = props;
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.con_div}
      >
        <h2
          className={styles.text}
        >
          Gideon Odiase
        </h2>
        <div
          className={styles.arr_}
        >
          <label
            className={styles.role_}
          >
            Software Engineer
            <br></br>
            {`{ FullStack }`}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Home;