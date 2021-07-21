import React, { Fragment } from 'react'
import styles from './index.module.css'
import Navigation from '../Components/Nav';

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

                </div>
              </div>
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