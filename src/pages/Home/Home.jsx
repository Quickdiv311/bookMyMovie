import React from 'react';
import Banner from '../../components/Home/banner/Banner';
import Search from '../../components/Home/Search/Search';
import Header from '../../components/shared/Header/Header';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Header/>
     <Banner/>
     <Search/>
    </div>
  );
}

export default Home;
