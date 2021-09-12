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
      {
        (active === 'home') ? (
          <Home/>
        )
        : (active === 'about') ? (
          <About/>
        )
        : (active === 'contact') ? (
          <Contact/>
        )
        : (active === 'education') ? (
          <Education/>
        )
        : (
          <Portfolio/>
        )
      }
    </div>
  )
}

export default Routes;