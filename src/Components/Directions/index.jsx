import React from 'react'
import styles from '../Nav/nav.module.css'
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Directions = () => {
  return (
    <>
      <div
        className={styles.directions}
      >
        <div
          className={styles.each}
        >
          <FaLessThan
            className={`${styles.gIconSocial} ${styles.lsSign}`}
          />
        </div>
        <div
          className={styles.each}
        >
          <FaGreaterThan
            className={`${styles.gIconSocial} ${styles.gtSign}`}
          />
        </div>
      </div>
    </>
  )
}

export default Directions;