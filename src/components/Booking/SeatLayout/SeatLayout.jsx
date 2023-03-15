import React, { useState } from 'react';
import styles from './SeatLayout.module.css'

const SeatLayout = () => {

  
  const seat4 = Array(4).fill(1);
  const seat6 = Array(6).fill(1);
  const seat2 = Array(2).fill(1);
  const seat3 = Array(3).fill(1);
  const silverPlus = ['G','F'];
  const goldPlus = ['E','D','C','B','A'];
  const availableSeats = ['G3','G7','G8','F1','F3','F11','A1','A2','B5','B6','E11','E12'];
  const [selectedSeats, setSelectedSeats] = useState([]);

  function addSelected(value)
  {
     let seats = [...selectedSeats];
     if(seats.includes(value))
     {
       seats.splice(seats.indexOf(value),1);
     }
     else
     {
      seats.push(value);
     }
     console.log(seats);
     setSelectedSeats(seats);
  }

  function doubleSelected(value1, value2)
  {
   let seats = [...selectedSeats];
   if(seats.includes(value1) && seats.includes(value2))
   {
     seats.splice(seats.indexOf(value1),1);
     seats.splice(seats.indexOf(value2),1);
   }
   else
   {
    seats.push(value1);
    seats.push(value2);
   }
   console.log(seats);
   setSelectedSeats(seats);
  }

  function isSelected(value)
  {
   let seats = [...selectedSeats];
   if(seats.includes(value))
   {
      return styles.selectedSeatsStyle;
   }
   else
   {
      return styles.availableSeatsStyle;
   }
  }

  return (
    <div className={styles.seatPlan}>
                 <p className={styles.screenHeader}>
             <hr className={styles.topLine}/>
             <h2>SCREEN</h2>
             <hr />
           </p>
           <img width="90%" src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
                ></img>
            <div className={styles.layout}>
            <p className={styles.silverPlus}>
              <hr className={styles.topLine} />
              <h4>SLIVER PLUS</h4>
              <hr />
            </p>
            </div>
       <table>
                {
                    silverPlus.map((rowNum) => (
                       <tr>
                         <td style={{color: 'white', fontSize: 'large'}}>{rowNum}</td>
                         <td className={styles.seatCol}>
                            {
                                seat4.map((item, i) => 
                                
                                 availableSeats.includes(rowNum+(i+1)) ? 
                                 (<span className={isSelected(rowNum+(i+1))} onClick={() => {addSelected(rowNum+(i+1))}}>
                                 <span className={styles.seatNumber}>{rowNum+(i+1)}</span>
                                 {
                                    selectedSeats.includes(rowNum+(i+1)) ?
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01-booked.png" className={styles.seatImg} alt="" />
                                 :
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png" className={styles.seatImg} alt="" />
                                 }
                                 </span>) : 
                                 (<img src='http://pixner.net/boleto/demo/assets/images/movie/seat01.png' className={styles.seatImg}/>)
                                
                                )
                            }
                         </td>

                         <td className={styles.seatCol}>
                            {
                                seat6.map((item,i) => 
                                availableSeats.includes(rowNum+(i+5)) ? 
                                (<span className={isSelected(rowNum+(i+5))} onClick={() => {addSelected(rowNum+(i+5))}}>
                                <span className={styles.seatNumber}>{rowNum+(i+5)}</span>
                                {
                                 selectedSeats.includes(rowNum+(i+5)) ?
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01-booked.png" className={styles.seatImg} alt="" />
                                 :
                                <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png" className={styles.seatImg} alt="" />
                              }
                                </span>) : 
                                (<img src='http://pixner.net/boleto/demo/assets/images/movie/seat01.png' className={styles.seatImg}/>)
                                )
                            }
                         </td>

                         <td className={styles.seatCol}>
                            {
                                seat4.map((item,i) => 
                                availableSeats.includes(rowNum+(i+11)) ? 
                                (<span className={isSelected(rowNum+(i+11))} onClick={() => {addSelected(rowNum+(i+11))}}>
                                <span className={styles.seatNumber}>{rowNum+(i+11)}</span>
                                {
                                 selectedSeats.includes(rowNum+(i+11)) ?
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01-booked.png" className={styles.seatImg} alt="" />
                                 :
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png" className={styles.seatImg} alt="" />
                              }
                                </span>) : 
                                (<img src='http://pixner.net/boleto/demo/assets/images/movie/seat01.png' className={styles.seatImg}/>)
                                )
                            }
                         </td>
                         <td style={{color: 'white', fontSize: 'large'}}>{rowNum}</td>
                       </tr>
                    ))
                }
            </table>
            <div className={styles.layout}>
            <p className={styles.silverPlus}>
              <hr className={styles.topLine} />
              <h4>GOLD PLUS</h4>
              <hr />
            </p>
            </div>
            <table>
                {
                    goldPlus.map((rowNum) => (
                       <tr>
                         <td style={{color: 'white', fontSize: 'large'}}>{rowNum}</td>
                         <td className={styles.seatCol}>
                            {
                                seat2.map((item,i) => (
                                   rowNum+(i+1)%2!=0 && availableSeats.includes(rowNum+(i+1)) &&  availableSeats.includes(rowNum+(i+2))? 
                                (<span className={isSelected(rowNum+(i+1))} onClick={() => {doubleSelected(rowNum+(i+1),rowNum+(i+2))}}>
                                <span className={styles.doubleSeatNumber}>{rowNum+(i+1)}</span>
                                <span className={styles.doubleSeatNumber2}>{rowNum+(i+2)}</span>
                                {
                                 selectedSeats.includes(rowNum+(i+1)) ?
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02-booked.png" className={styles.doubleSeatImg} alt="" />
                                 :
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02-free.png" className={styles.doubleSeatImg} alt="" />
                              }
                                </span>) : 
                                (<img src='http://pixner.net/boleto/demo/assets/images/movie/seat02.png' className={styles.doubleSeatImg}/>)
                                ))
                            }
                         </td>

                         <td className={styles.seatCol}>
                            {
                                seat3.map((item,i) => (
                                 rowNum+(i+5)%2!=0 && availableSeats.includes(rowNum+(i+5)) &&  availableSeats.includes(rowNum+(i+6)) ? 
                                (<span className={isSelected(rowNum+(i+5))} onClick={() => {doubleSelected(rowNum+(i+5),rowNum+(i+6))}}>
                                <span className={styles.doubleSeatNumber}>{rowNum+(i+5)}</span>
                                <span className={styles.doubleSeatNumber2}>{rowNum+(i+6)}</span>
                                {
                                 selectedSeats.includes(rowNum+(i+5)) ?
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02-booked.png" className={styles.doubleSeatImg} alt="" />
                                 :
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02-free.png" className={styles.doubleSeatImg} alt="" />
                              }
                                </span>) : 
                                (<img src='http://pixner.net/boleto/demo/assets/images/movie/seat02.png' className={styles.doubleSeatImg}/>)
                                ))
                            }
                         </td>

                         <td className={styles.seatCol}>
                            {
                                seat2.map((item,i) => (
                                 rowNum+(i+11)%2!=0 && availableSeats.includes(rowNum+(i+11)) &&  availableSeats.includes(rowNum+(i+12)) ? 
                                (<span className={isSelected(rowNum+(i+11))} onClick={() => {doubleSelected(rowNum+(i+11),rowNum+(i+12))}}>
                                <span className={styles.doubleSeatNumber}>{rowNum+(i+11)}</span>
                                <span className={styles.doubleSeatNumber2}>{rowNum+(i+12)}</span>
                                {
                                 selectedSeats.includes(rowNum+(i+11)) ?
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02-booked.png" className={styles.doubleSeatImg} alt="" />
                                 :
                                 <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02-free.png" className={styles.doubleSeatImg} alt="" />
                              }
                                </span>) : 
                                (<img src='http://pixner.net/boleto/demo/assets/images/movie/seat02.png' className={styles.doubleSeatImg}/>)
                                ))
                            }
                         </td>
                         <td style={{color: 'white', fontSize: 'large'}}>{rowNum}</td>
                       </tr>
                    ))
                }
            </table>
    </div>
  );
}

export default SeatLayout;
