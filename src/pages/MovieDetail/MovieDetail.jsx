
import MovieHeader from "../../components/MovieDetail/MovieHeader/MovieHeader";
import Header from "../../components/shared/Header/Header";
import styles from "./MovieDetail.module.css";
import {  useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function MovieDetail(){

    const [movie, setMovie] = useState({});
    let {id} = useParams();

    useEffect(() => {
        fetch("http://localhost:4000/api/movie/"+id)
        .then((res) => res.json())
        .then((res) => {
            setMovie(res);
        })
   },[]);

    return(
        <div>
             <Header />
             <div className={styles.detail}>
                <section className={styles.header}>
                    <img className={styles.headerImg} src={movie.posterUrl} alt="" />
                </section>
                <section className={styles.movieHeader}>
                    <MovieHeader movie={movie}/>
                </section>
                <section className={styles.banner}>
                <a href={`${id}/ticketPlan`} className={styles.btnBookTickets}>Book Tickets</a>
                </section>
             </div>
             <Outlet/>
        </div>
    )
}

export default MovieDetail;