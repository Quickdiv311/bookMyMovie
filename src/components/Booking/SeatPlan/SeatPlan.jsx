import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import styles from './SeatPlan.module.css'

const SeatPlan = () => {

  const [seat4, setSeat4] = useState([1,1,1,1]);
  const [seat6, setSeat6] = useState([1,1,1,1,1,1]);
  const [seat2, setSeat2] = useState([1,1]);
  const [seat3, setSeat3] = useState([1,1,1]);
  const [silverPlus, setSilverPlus] = useState(['G','H']);
  const [goldPlus, setGoldPlus] = useState(['A','B','C','D','E','F']);

  return (
    <div className={styles.continer}>
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
       <div className={styles.seatPlan}>
           <p className={styles.screenHeader}>
             <hr className={styles.topLine}/>
             <h2>SCREEN</h2>
             <hr />
           </p>
           <img width="50%" src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
                ></img>
            <p className={styles.silverPlus}>
              <hr className={styles.topLine} />
              <h4>SLIVER PLUS</h4>
              <hr />
            </p>
            <table>
                {
                    silverPlus.map((rowNum) => (
                       <tr>
                         <td style={{color: 'white', fontSize: 'large'}}>{rowNum}</td>
                         <td className={styles.seatCol}>
                            {
                                seat4.map((i) => (
                                   <img src='http://pixner.net/boleto/demo/assets/images/movie/seat01.png' className={styles.seatImg}/>
                                ))
                            }
                         </td>

                         <td className={styles.seatCol}>
                            {
                                seat6.map((i) => (
                                   <img src='http://pixner.net/boleto/demo/assets/images/movie/seat01.png' className={styles.seatImg}/>
                                ))
                            }
                         </td>

                         <td className={styles.seatCol}>
                            {
                                seat4.map((i) => (
                                   <img src='http://pixner.net/boleto/demo/assets/images/movie/seat01.png' className={styles.seatImg}/>
                                ))
                            }
                         </td>
                         <td style={{color: 'white', fontSize: 'large'}}>{rowNum}</td>
                       </tr>
                    ))
                }
            </table>
            <p className={styles.silverPlus}>
              <hr className={styles.topLine} />
              <h4>GOLD PLUS</h4>
              <hr />
            </p>
            <table>
                {
                    goldPlus.map((rowNum) => (
                       <tr>
                         <td style={{color: 'white', fontSize: 'large'}}>{rowNum}</td>
                         <td className={styles.seatCol}>
                            {
                                seat2.map((i) => (
                                   <img src='http://pixner.net/boleto/demo/assets/images/movie/seat02.png' className={styles.doubleSeatImg}/>
                                ))
                            }
                         </td>

                         <td className={styles.seatCol}>
                            {
                                seat3.map((i) => (
                                    <img src='http://pixner.net/boleto/demo/assets/images/movie/seat02.png' className={styles.doubleSeatImg}/>
                                ))
                            }
                         </td>

                         <td className={styles.seatCol}>
                            {
                                seat2.map((i) => (
                                    <img src='http://pixner.net/boleto/demo/assets/images/movie/seat02.png' className={styles.doubleSeatImg}/>
                                ))
                            }
                         </td>
                         <td style={{color: 'white', fontSize: 'large'}}>{rowNum}</td>
                       </tr>
                    ))
                }
            </table>
       </div>
    </div>
  );
}

export default SeatPlan;
