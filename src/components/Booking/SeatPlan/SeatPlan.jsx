import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import BookedSeats from '../BookedSeats/BookedSeats';
import SeatLayout from '../SeatLayout/SeatLayout';
import styles from './SeatPlan.module.css'

const SeatPlan = () => {

  return (
    <div className={styles.container}>
        <Header/>
        
       <div className={styles.banner}>
          <h1>Venus</h1>
          <p>City Walk</p>
       </div>

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

       <div className={styles.layout}>
       <SeatLayout/>
       <BookedSeats/>
       </div>

    </div>
  );
}

export default SeatPlan;
