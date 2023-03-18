import React, { useState } from 'react';
import Header from '../../shared/Header/Header';
import BookedSeats from '../BookedSeats/BookedSeats';
import BookingBanner from '../BookingBanner/BookingBanner';
import BookingHeader from '../BookingHeader/BookingHeader';
import SeatLayout from '../SeatLayout/SeatLayout';
import styles from './SeatPlan.module.css'

const SeatPlan = () => {

  return (
    <div className={styles.container}>
        <Header/>
      
       <BookingBanner/>
       <BookingHeader/>

       <div className={styles.layout}>
       <SeatLayout/>
       <BookedSeats/>
       </div>

    </div>
  );
}

export default SeatPlan;
