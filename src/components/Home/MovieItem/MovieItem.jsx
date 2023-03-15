import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieItem.css';

const MovieItem = (props) => {

  let navigate = useNavigate();

  return (
    <div className='movie-item' onClick={() => navigate('movie/'+props.movie._id)}>
        <img className='movie-item-img' src={props.movie.posterUrl} alt="" />
        <h5>{props.movie.name.length>=25 ? props.movie.name.slice(0,25)+'...' : props.movie.name}</h5>
        <p className="content">
                    <hr />
                        <div className='item-ratings'>
                        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'></img>
                        &nbsp;&nbsp;
                        <span>{props.movie.rating}</span>
                        </div>
                </p>
    </div>
  );
}

export default MovieItem;
