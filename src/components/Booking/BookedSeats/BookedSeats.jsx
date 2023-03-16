import React from 'react';
import { useSelector } from 'react-redux';
import { bookingSelector, priceSelector } from '../../../store/reducers/BookingReducer';
import styles from './BookedSeats.module.css';

const BookedSeats = () => {
  const selectedSeats = useSelector(bookingSelector);
  const seatsPrice = useSelector(priceSelector);

  return (
    <div className={styles.bookingTotal}>
      { selectedSeats.length>0 &&
       <div className={styles.container}>
      <div className={styles.left}>
          <h5>You have Chosen Seat</h5>
          <h1>
            {
              selectedSeats.map((seat,i) => <span>{seat + (i<selectedSeats.length-1 ? ",":"")}</span>)
            }
          </h1>
      </div>
      <div className={styles.left}>
          <h5>Total Price</h5>
          <h1>{seatsPrice}</h1>
      </div>
      <button className={styles.rightBtn}>PROCEED</button>
      </div>}
    </div>
  );
}

export default BookedSeats;
