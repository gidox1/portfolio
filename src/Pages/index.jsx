import React, { Fragment } from 'react'
import styles from './index.module.css'
import Navigation from '../Components/Nav';
import Listing from '../Components/Listing'

const IndexPage = () => {
  return (
    <Fragment>
      <div
        className={styles.container}
      >
        <div
          className={styles.contents}
        >
          <div
            className={styles.main}
          >
            <div
              className={styles.profileSection}
            >
              <div
                className={styles.photoSec}
              >
                <div
                  className={styles.photo}
                >
                  <img
                    className={styles.mainPhoto}
                    src='1612201792182.jpeg'
                  />
                </div>
              </div>
              <Listing/>
            </div>
            <div
              className={styles.routes}
            >

            </div>
          </div>
          <div
            className={styles.navContainer}
          >
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage;