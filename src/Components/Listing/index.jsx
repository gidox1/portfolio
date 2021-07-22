import React from 'react'
import styles from './listing.module.css'
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Listing = () => {
  return (
    <>
      <div
        className={styles.container}
      >
        <h2
          className={styles.name_}
        >
          Gideon Odiase
        </h2>
        <h4
          className={styles.role}
        >
          Software Engineer
        </h4>
        <div
          className={styles.social}
        >
          <FontAwesomeIcon
            size="2x"
            style={{ color: 'white' }}
            icon={faLinkedin} 
            className={styles.iconSocial}
          />
          <FontAwesomeIcon
            size="2x" 
            style={{ color: 'white' }} 
            icon={faGithub}
            className={styles.iconSocial}
          />
        </div>
        <div
          className={styles.buttonDiv_}
        >
          <input
            type="button"
            className={styles.download}
            value="Download CV"
          />
        </div>
        <p
          style={{color:'white', textAlign:"center"}}
        >
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Listing;