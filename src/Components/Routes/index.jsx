import React, { useState } from 'react';
import styles from './Routes.module.css';
import Home from '../../Containers/Home/Home';
import About from '../../Containers/About/About';
import Contact from '../../Containers/Contact/Contact';
import Education from '../../Containers/Education/Education';
import Portfolio from '../../Containers/Portfolio/Portfolio';

const Routes = (props) => {
  const { active } = props
  console.log(active, "props")
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.rounded}
      >
        Dummy
      </div>
      {
        (active === 'home') ? (
          <Home
            selected={true}
          />
        )
        : (active === 'about') ? (
          <About
            selected={true}
          />
        )
        : (active === 'contact') ? (
          <Contact
            selected={true}
          />
        )
        : (active === 'education') ? (
          <Education
            selected={true}
          />
        )
        : (
          <Portfolio
            selected={true}
          />
        )
      }
    </div>
  )
}

export default Routes;