import React, { useState } from 'react';
import styles from './portfolio.module.css';

const data = [{
  path: '/iconmonstr-github-1.svg',
  label: 'View my GitHub Profile'
},
{
  path: '/npm.svg',
  label: 'View my NPM profile'
}];

const Portfolio = () => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.logoDiv}
      >
        <div
          className={styles.each_}
        >
          <img
            className={`${styles.imgClass} ${styles.ghLogo}`}
            src='/iconmonstr-github-1.svg'
            onClick={
              () => {
                window.open('https://github.com/gidox1')
              }
            }
          />
          <p
            className={styles.lowerLabel}
          >
            View my GitHub projects
          </p>
        </div>
        <div
          className={styles.each_}
        >
          <img
            className={`${styles.imgClass} ${styles.npmLogo}`}
            src='/npm.svg'
            onClick={
              () => {
                window.open('https://www.npmjs.com/~gidox')
              }
            }
          />
          <p
            className={styles.lowerLabel}
          >
            View my NPM packages
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;