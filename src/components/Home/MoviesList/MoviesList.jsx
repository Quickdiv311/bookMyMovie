import React, { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';

import { Carousel } from 'primereact/carousel';
import './MoviesList.css';

const MoviesList = () => {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
       fetch("http://localhost:4000/api/movie")
       .then((res) => res.json())
       .then((res) => setMovies(res))
  },[]);

  return (
    <div className='movies-list container fluid'>
      <div className="movies-list-header">
        <div className="movies-list-header1">
         <h2>MOVIES</h2>
         <p>Be sure not to miss these Movies today.</p>
         </div>
        <div className="movies-list-header2">
            <button className='btn btn-primary'>Now Showing</button>
            <button className="btn btn-transparent">Coming Soon</button>
            <button className="btn btn-transparent">Exclusive</button>
        </div>
      </div>
      <div className="movies-list-main">
         <div className="row">
          
            {
                movies.map((movie) => (
                  <div className="col-md-3">
                    <MovieItem movie={movie}/>
                 </div>
                ))
            }
          </div>
      </div>
    </div>
  );
}

export default MoviesList;
