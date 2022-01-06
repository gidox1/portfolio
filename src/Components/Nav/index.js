import React, { Fragment, useState } from 'react'
import styles from './nav.module.css'
import { FaHome, FaUserAlt, FaGraduationCap, FaSuitcase, FaEnvelope, FaLaptopCode } from "react-icons/fa";
import Directions from '../Directions'

const Navigation = (props) => {
  const allPages = ['home', 'about', 'education', 'portfolio', 'contact'];
  const [selected, setSelected] = useState('home');

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
              className={(selected === 'home') ? styles.iconSocialex : styles.iconSocial}
              onClick={(e) => {
                setSelected('home');
                props.setPage('home');
              }}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaUserAlt
              className={(selected === 'about') ? styles.iconSocialex : styles.iconSocial}
              onClick={(e) => {
                setSelected('about');
                props.setPage('about');
              }}
            />
          </div>
          <div
            className={styles.each}
          >            
            <FaGraduationCap
              className={(selected === 'education') ? styles.iconSocialex : styles.iconSocial}
              onClick={(e) => {
                setSelected('education');
                props.setPage('education');
              }}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaSuitcase
              className={(selected === 'portfolio') ? styles.iconSocialex : styles.iconSocial}
              onClick={(e) => {
                setSelected('portfolio');
                props.setPage('portfolio');
              }}
            />
          </div>
          <div
            className={styles.each}
          >
            <FaEnvelope
              className={(selected === 'contact') ? styles.iconSocialex : styles.iconSocial}
              onClick={(e) => {
                setSelected('contact');
                props.setPage('contact');
              }}
            />
          </div>
        </div>
        <Directions
          callback={props.setPage}
          pages={allPages}
          current={selected}
        />
      </div>
    </Fragment>
  )
}

export default Navigation;