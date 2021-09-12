import React, { Fragment } from 'react'
import styles from './nav.module.css'
import { FaHome, FaUserAlt, FaGraduationCap, FaSuitcase, FaEnvelope } from "react-icons/fa";
import Directions from '../Directions'

const Navigation = (props) => {
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
              onClick={(e) => props.setPage('home')}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaUserAlt
              className={styles.iconSocial}
              onClick={(e) => props.setPage('about')}
            />
          </div>
          <div
            className={styles.each}
          >            
            <FaGraduationCap
              className={styles.iconSocial}
              onClick={(e) => props.setPage('education')}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaSuitcase
              className={styles.iconSocial}
              onClick={(e) => props.setPage('portfolio')}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaEnvelope
              className={styles.iconSocial}
              onClick={(e) => props.setPage('contact')}
            />
          </div>
        </div>
        <Directions/>
      </div>
    </Fragment>
  )
}

export default Navigation;