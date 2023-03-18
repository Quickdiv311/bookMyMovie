import React from 'react';
import styles from './BookingHeader.module.css';
import { Link } from 'react-router-dom';

const BookingHeader = () => {
  return (
    <div className={styles.header}>
    <p className={styles.headLeft}>
      <Link className={styles.backBtn}>
         {'<< Back'}
      </Link>
    </p>
    <p className={styles.headCenter}>
      <span className={styles.date}>MON, SEP 09 2020</span>
              &nbsp;&nbsp; &nbsp;&nbsp;
      <select className={styles.selectBar}>
          <option value="sc1">09:40</option>
          <option value="sc2">13:45</option>
          <option value="sc3">15:45</option>
          <option value="sc4">19:50</option>
      </select>
    </p>
    <p className={styles.headRight}>
          <h3>05:00</h3>
          <p>Mins Left</p>
    </p>
 </div>
  );
}

export default BookingHeader;
