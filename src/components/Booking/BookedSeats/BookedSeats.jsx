import React from 'react';
import styles from './BookedSeats.module.css';

const BookedSeats = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h5>You have Chosen Seat</h5>
            <h1>D1,D2</h1>
        </div>
        <div className={styles.left}>
            <h5>Total Price</h5>
            <h1>150</h1>
        </div>
        <button className={styles.rightBtn}>PROCEED</button>
    </div>
  );
}

export default BookedSeats;
