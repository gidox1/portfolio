import React, { useState } from 'react';
import styles from './education.module.css';

const BallComponent = () => {
  return (
    <div
      className={styles.main_ball}
    >
    </div>
  )
}

const Education = (props) => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.main}
      >
        <div
          className={styles.header}
        >
          <h1>Education</h1>
        </div>
        <div
          className={styles.content}
        >
         <div
          className={styles.segments}
         >
          <div
            className={styles.year}
          >
            <p className={styles.yearLabel}>
              <b style={{color: 'black'}}>2017</b>
              <br></br>
              <br></br>
              Federal University of Agriculture. 
              <br></br>
              <br></br>
              Abeokuta, Nigeria
            </p>
          </div>
          <div
            className={styles.school}
          >
            <div
              className={styles.dot_sec}
            >
            </div>
            <div
              className={styles.school_label}
            >
              <b>Bachelor of Science (BSc) in Computer Science</b>
            </div>
          </div>
         </div>
         <div
          className={styles.segments}
         >
          <div
            className={styles.year}
          >
            <p className={styles.yearLabel}>
              <b style={{color: 'black'}}>2009</b>
              <br></br>
              <br></br>
              University Preparatory Secondary School.
              <br></br>
              <br></br>
              Edo, Nigeria
            </p>
          </div>
          <div
            className={styles.school}
          >
            <div
              className={styles.dot_sec_2}
            >
            </div>
            <div
              className={styles.school_label}
            >
              <b>Senior School Certificate Examination (SSCE)</b>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Education;