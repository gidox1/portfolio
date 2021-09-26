import React, { useState } from 'react';
import styles from './about.module.css';
import { FaLaptopCode, FaCode, FaRegFileCode } from "react-icons/fa";

const About = () => {
  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.content}
      >
        <div
          className={styles.header}
        >
          <h2 className={styles.headerText}>About <span className={styles.greenText}>Me</span></h2>
          <p className={styles.details_}>Hi, I'm Gideon, a Software Engineer with a special affection for Javascript and Typescript. When i'm not building cool stuff, I spend time with my family, play video games or write Poetry.</p>
        </div>
        <div
          className={styles.info_}
        >
          <h2 className={styles.i_do_text}>What <span className={styles.greenText}>I Do</span></h2>
          <div
            className={styles.split_div_}
          >
            <div
              className={styles.split_tabs}
            >
              <div
                className={styles.info_segments}
              >
                <div style={{width: '100%'}}>
                  <FaLaptopCode
                    className={styles.laptop}
                  />
                  <p className={styles.segment_header}>Web Development</p>
                  <p className={styles.details_}>I have experience in building for the web with technologies like React, Vue, Typescript / Javascript HTML, EJS, and CSS.</p>
                </div>

                <div style={{width: '100%'}}>
                  <FaRegFileCode
                    className={styles.laptop}
                  />
                  <p className={styles.segment_header}>Dev-Ops & Infrastructure</p>
                  <p className={styles.details_}>I am able to work also work as a Dev-Ops Engineer, having experience in Docker, AWS, GCP and CI/CD</p>
                </div>
                
              </div>
            </div>
            <div
              className={styles.split_tabs}
            >
              <FaCode
                className={styles.laptop}
              />
              <p className={styles.segment_header}>Backend Development</p>
              <p className={styles.details_}>I'm vastly experienced in building APIs with technologies like Node (Express, Nest, Restify), Typescript / Javscript, Python (Flask), MySQL, PostgreSQL and GraphQl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;