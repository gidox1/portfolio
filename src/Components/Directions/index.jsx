import React, { Fragment, useState } from 'react'
import styles from '../Nav/nav.module.css'
import { FaLessThan, FaGreaterThan } from "react-icons/fa";


const Directions = (props) => {
  const [currentNav, setCurrentNav] = useState(1);
  const [value, setValue] = useState(1);

  const pages = props.pages;

  const rand = () => {
    const rand = Math.floor(Math.random() * 5);
    setValue(rand);
    return rand;
  };

  const getRandomPage = ()=> {
    rand()
    // console.log(value, currentNav,val, "currentNav")
    // while(value === currentNav) {
    //   rand();
    // } 
    // setCurrentNav(value);
    return value
  }

  return (
    <>
      <div
        className={styles.directions}
      >
        <div
          className={styles.each}
        >
          <FaLessThan
            className={`${styles.gIconSocial} ${styles.lsSign}`}
            onClick={(e) => {
                return props.callback(pages[getRandomPage()])
              }
            }          
          />
        </div>
        <div
          className={styles.each}
        >
          <FaGreaterThan
            className={`${styles.gIconSocial} ${styles.gtSign}`}
            onClick={(e) => {
                return props.callback(pages[getRandomPage()])
              }
            }
          />
        </div>
      </div>
    </>
  )
}

export default Directions;