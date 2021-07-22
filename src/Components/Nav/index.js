import React, { Fragment } from 'react'
import styles from './nav.module.css'
import { FaHome, FaUserAlt, FaGraduationCap, FaSuitcase, FaEnvelope } from "react-icons/fa";
import Directions from '../Directions'

const Navigation = () => {
  return (
    <Fragment>
      <div
        className={styles.container}
      >
        <div
          className={styles.firstRow}
        >
          <div
            className={styles.each}
          >
            <FaHome
              className={styles.iconSocial}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaUserAlt
              className={styles.iconSocial}
            />
          </div>
          <div
            className={styles.each}
          >            
            <FaGraduationCap
              className={styles.iconSocial}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaSuitcase
              className={styles.iconSocial}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaEnvelope
              className={styles.iconSocial}
            />
          </div>
        </div>
        <Directions/>
      </div>
    </Fragment>
  )
}

export default Navigation;