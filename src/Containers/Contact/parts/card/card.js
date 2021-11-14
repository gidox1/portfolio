import React, { useState } from 'react';
import styles from './card.module.css';
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

const Card = () => {
  return (
    <div
      className={styles.wrapper}
    >
      <div
        className={styles.container}
      >
        <div
          className={styles.cardLayout}
        >
          <GoLocation
            className={styles.contactIcons}
          />
          <h4
            className={styles.cardText}
          >
            Nigeria
          </h4>
        </div>
        <div
          className={styles.cardLayout}
        >
          <FiPhone
            className={styles.contactIcons}
          />
          <h4
            className={styles.cardText}
          >
            +234 7033 0534 29
          </h4>
        </div>
      </div>
      <div
        className={styles.downCard}
      >
        <div
          className={`${styles.cardLayout} ${styles.cardLayoutDown}`}
        >
          <FaRegEnvelope
            className={styles.contactIcons}
          />
          <h4
            className={styles.cardText}
          >
            gideonodiase1@gmail.com
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Card;