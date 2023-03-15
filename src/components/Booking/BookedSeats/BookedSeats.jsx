import React from 'react';
import { useSelector } from 'react-redux';
import { bookingSelector } from '../../../store/reducers/BookingReducer';
import styles from './BookedSeats.module.css';

const BookedSeats = () => {
  const selectedSeats = useSelector(bookingSelector);

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h5>You have Chosen Seat</h5>
            <h1>
              {
                selectedSeats.map((seat) => <span>{seat+" "}</span>)
              }
            </h1>
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
