import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import styles from './TicketPlan.module.css'

const TicketPlan = () => {

  const [cinemas, setCinemas] = useState([]);
  let {id} = useParams();

  useEffect(() => {
      fetch("http://localhost:4000/api/movie/cinema/"+id)
      .then((res) => res.json())
      .then((res) => {
        setCinemas(res);
      })
 },[]);

  return (
    <div className={styles.plan}>
      <Header/>
      <div className={styles.container}>
       {
        cinemas.map((cinema) => (
          <div className={styles.timings}>
          <div className={styles.left}>
            <div className={styles.name}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             {cinema.name}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.timeBox}>
              {
                cinema.timings.map((timing) => (
                  <Link to={"/movie/seatPlan/"+cinema._id} className={styles.link}>
                    <p className={styles.time}>
                      {timing.time}
                    </p>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        ))
       }
      </div>
    </div>
  );
}

export default TicketPlan;
