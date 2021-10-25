import React, { useState } from 'react';
import styles from './form.module.css';

const Form = () => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.header}
      >
        <h3
          className={styles.headerText}
        >
          Send me a message here, thanks!
        </h3>
      </div>
      <div
        className={styles.main}
      >
        <div
          className={styles.basic}
        >
        </div>
        <div
          className={styles.mainContent}
        >
        </div>
      </div>
    </div>
  )
}

export default Form;