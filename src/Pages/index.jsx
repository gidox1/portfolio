import React, { Fragment, useState } from 'react'
import styles from './index.module.css'
import Navigation from '../Components/Nav';
import Listing from '../Components/Listing';
import Routes from '../Components/Routes'

const IndexPage = () => {
  const [ page, setPage ] = useState('home');

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
                    src='/me.jpeg'
                  />
                </div>
              </div>
              <Listing/>
            </div>
            <div
              className={styles.routes}
            >
              <Routes
                active={page}
              />
            </div>
          </div>
          <div
            className={styles.navContainer}
          >
           <Navigation
            setPage={setPage}
            active={page}
           />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage;