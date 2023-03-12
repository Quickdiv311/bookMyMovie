import React from 'react';
import Banner from '../../components/Home/banner/Banner';
import MoviesList from '../../components/Home/MoviesList/MoviesList';
import Search from '../../components/Home/Search/Search';
import Header from '../../components/shared/Header/Header';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Header/>
     <Banner/>
     <Search/>
     <MoviesList/>
    </div>
  );
}

export default Home;
