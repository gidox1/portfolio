import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div
      className={styles.container}
    >
      <div className={styles.photo}>
        <img
          className={styles.mainPhoto}
          src='/me.jpeg'
        />
      </div>
      <div>
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
          className={styles.labels}
        >
          <label
            onClick={
              () => {
                console.log('Home');
                props.setActive(!props.active)
                props.setPage('home');
              }
            }
            className={styles.selectedLabel}
          >
            Home
          </label>
          <label
            onClick={
              () => {
                console.log('About Me')
                props.setActive(!props.active)
                props.setPage('about');
              }
            }
            className={styles.selectedLabel}
          >
            About Me
          </label>
          <label
            onClick={
              () => {
                console.log('Portfolio')
                props.setActive(!props.active)
                props.setPage('portfolio');
              }
            }
            className={styles.selectedLabel}
          >
            Portfolio
          </label>
          <label
            onClick={
              () => {
                props.setActive(!props.active)
                props.setPage('contact');
              }
            }
            className={styles.selectedLabel}
          >
            Contact
          </label>
          <label
            onClick={
              () => {
                props.setActive(!props.active)
                props.setPage('education');
              }
            }
            className={styles.selectedLabel}
          >
            Education
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;