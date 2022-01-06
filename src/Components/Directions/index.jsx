import React, { Fragment, useState } from 'react'
import styles from '../Nav/nav.module.css'
import { FaLessThan, FaGreaterThan } from "react-icons/fa";


const Directions = (props) => {
  const [value, setValue] = useState(1);
  const [currentPage, setCurrentPage] = useState(props.current);
  const [direction, setDirection] = useState(null)
  const allPages = ['home', 'about', 'education', 'portfolio', 'contact'];
  const pages = props.pages;
  let curPage = props.current ? props.current : 'home'

  const isValuePresent = (element) => {
    return element === curPage;
  }
  const pageIndex = allPages.findIndex(isValuePresent);

  let returnIndex = allPages[0];
  if(pageIndex >= allPages.length || pageIndex === -1) {
    returnIndex = allPages[0];
  } else {
    if(direction && direction === 'left') {
      if(pageIndex === (allPages.length - 1)) {
        returnIndex = allPages[0];
      } else {
        returnIndex = allPages[pageIndex - 1]
      }
    } else if(direction && direction === 'right') {
      if(pageIndex === (allPages.length - 1)) {
        returnIndex = allPages[0];
      } else {
        returnIndex = allPages[pageIndex + 1]
      }
    }
  }
  // if(props.current)
  const rand = () => {
    const rand = Math.floor(Math.random() * 5);
    setValue(rand);
    return rand;
  };

  const setDirectionState = (e, str, returnIndex) => {
    // e.preventDefault();
    // setDirection(str);
    // const newIndex = allPages.findIndex(isValuePresent);
    // console.log(pageIndex, returnIndex, newIndex, "pageIndexpageIndexpageIndex")
    // if(pageIndex === 0) {
    //   return;
    // }
    // // console.log(returnIndex, pages[getRandomPage()], "RAND\n\n")
    // return props.callback(returnIndex);
    return props.callback(pages[getRandomPage()])
  }
console.log(direction, "directionvdirection")
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
          <img
            className={`${styles.gIconSocial} ${styles.lsSign}`}
            src='/right-arrow.svg'
            onClick={(e) => setDirectionState(e, 'left', returnIndex)}
          />
        </div>
        <div
          className={styles.each}
        >
          <img
            className={`${styles.gIconSocial} ${styles.gtSign}`}
            src='/right-arrow.svg'
            onClick={(e) => setDirectionState(e, 'right', returnIndex)}
          />
        </div>
      </div>
    </>
  )
}

export default Directions;