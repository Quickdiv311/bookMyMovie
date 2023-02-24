import React from 'react';
import styles from './Search.module.css'
import {GoSearch} from 'react-icons/go';

const Search = () => {
  return (
    <div className={styles.search}>
      <h5>WELCOME TO BOLETO</h5>
      <h4>WHAT ARE YOU LOOKING FOR?</h4>
      <div className={styles.searchCont}>
         <div className={styles.searchBox}>
            <input type="text" placeholder='Search for movies'/>
            <GoSearch size={20} style={{color: 'white'}}/>
         </div>
         <div className={styles.searchDrops}></div>
      </div>
    </div>
  );
}

export default Search;
