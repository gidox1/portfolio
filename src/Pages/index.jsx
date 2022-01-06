import React, { Fragment, useState } from 'react'
import styles from './index.module.css'
import Navigation from '../Components/Nav';
import Listing from '../Components/Listing';
import Routes from '../Components/Routes'
import Directions from '../Components/Directions';
import Sidebar from '../Components/Sidebar';
import toggleStyle from '../Components/Sidebar/sidebar.module.css';
const allPages = ['home', 'about', 'education', 'portfolio', 'contact'];

const IndexPage = () => {
  const [ page, setPage ] = useState('home');
  const [active, setActive] = useState(false);

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
          <div
            className={`${styles.directions}`}
          >
            <Directions
              callback={setPage}
              pages={allPages}
              isHome={true}
              current={page}
            />
          </div>
          {
            active && (
              <div
                className={styles.sidebar_}
              > 
                  <Sidebar
                    setPage={setPage}
                    active={active}
                    setActive={setActive}
                  />
              </div>
            )
          }
          <div className={toggleStyle.greenfill}>
            <div className={toggleStyle.innerFill}>
              <div 
                onClick={() => setActive(!active)}
                className={(active) ? `${toggleStyle.sidebar} ${toggleStyle.active}`: toggleStyle.sidebar}
              >
                <div className={toggleStyle.toggleBtn}>
                  <span
                    className={
                      active ? toggleStyle.bar1_ : toggleStyle.bar1
                    }
                  ></span>
                  <span
                    className={
                      active ? toggleStyle.bar2_ : toggleStyle.bar2
                    }
                  ></span>
                  <span
                    className={
                      active ? toggleStyle.bar3_ : toggleStyle.bar3
                    }
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage;