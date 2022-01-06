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
            onClick={
              () => {
                window.open('https://www.linkedin.com/in/gideon-odiase-07240313b/')
              }
            }
          />
          <FontAwesomeIcon
            size="2x" 
            style={{ color: 'white' }} 
            icon={faGithub}
            className={styles.iconSocial}
            onClick={
              () => {
                window.open('https://github.com/gidox1')
              }
            }
          />
        </div>
        <div
          className={styles.buttonDiv_}
        >
          <input
            type="button"
            className={styles.download}
            value="Download CV"
            onClick={
              () => {
                window.open('https://res.cloudinary.com/passionpolisapi/image/upload/v1641065397/Gideon-Odiase-professional-resume_b98jjx.pdf')
              }
            }
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