import React, { useState } from 'react';
import styles from './contact.module.css';
import Card from './parts/card/card';
import Form from './parts/form';

const Contact = (props) => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.content}
      >
        <h2
          className={styles.header}
        >
          Contact
        </h2>
        <div
          className={styles.stacks}
        >
          <div
            className={styles.verticalStack}
          >
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;