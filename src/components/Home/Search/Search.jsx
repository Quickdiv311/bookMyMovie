import React, { useState } from 'react';
import styles from './Search.module.css'
import {GoSearch} from 'react-icons/go';
import {Dropdown} from "primereact/dropdown";
import { classNames } from 'primereact/utils';


const Search = () => {

  const [ selectedCity, setSelectedCity] = useState();
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

  return (
    <div className={styles.search}>
      <h5>WELCOME TO BOLETO</h5>
      <h4>WHAT ARE YOU LOOKING FOR?</h4>
      <div className={styles.searchCont}>
         <div className={styles.searchBox}>
            <input type="text" placeholder='Search for movies'/>
            <GoSearch size={20} style={{color: 'white'}}/>
         </div>
         <div className={styles.searchDrops}>
          <div className={styles.searchOption}>
            <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png" alt="" />
            <label>City</label>
            </div>
           
          <div className={styles.searchOption}>
                    <img src="http://pixner.net/boleto/demo/assets/images/ticket/date.png" alt="" />
                    <label>Date</label>
                   
             
                </div>
                <div className={styles.searchOption}>
                    <img src="http://pixner.net/boleto/demo/assets/images/ticket/cinema.png" alt="" />
                    <label>Cinema</label>
                    
                    </div>
         </div>
      </div>
    </div>
  );
}

export default Search;
