import React from 'react';
import styles from './Checkout.module.css';
import {FaUserCircle} from 'react-icons/fa';
import Header from '../../shared/Header/Header';
import BookingBanner from '../BookingBanner/BookingBanner';
import BookingHeader from '../BookingHeader/BookingHeader';

const Checkout = () => {
  return (
    <div>
        <Header/>
        <BookingBanner/>
        <BookingHeader/>
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.sign}>
                <div className={styles.signLeft}>
                    <h2>Already a Boleto Member?</h2>
                    <p>Sign in to earn points and make booking easier!</p>
                </div>
                <div className={styles.signRight}>
                    <FaUserCircle/>
                    <p>SignIn</p>
                </div>
            </div>
            <div className={styles.contact}></div>
            <div className={styles.promocode}></div>
            <div className={styles.payment}></div>
        </div>
        <div className={styles.right}>
            <div className={styles.section1}></div>
            <div className={styles.section2}></div>
            <div className={styles.section3}></div>
            <div className={styles.pay}></div>
        </div>
    </div>
    </div>
  );
}

export default Checkout;
