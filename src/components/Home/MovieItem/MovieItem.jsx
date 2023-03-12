import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieItem.css';

const MovieItem = (props) => {

  let navigate = useNavigate();

  return (
    <div className='movie-item' onClick={() => navigate('movie/'+props.movie._id)}>
        <img src={props.movie.posterUrl} alt="" />
        <h2>{props.movie.name}</h2>
        <p className="content">
                    <hr />
                        <div className='rating'>
                        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'></img>
                        &nbsp;&nbsp;
                        <span>{props.movie.rating}</span>
                        </div>
                </p>
    </div>
  );
}

export default MovieItem;
