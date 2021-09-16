import React from 'react';
import Header from '../../components/Landings/Header/Header';
import Cards from '../../components/Landings/Body/Cards/Cards';
import Article from '../../components/Landings/Body/Articles/Article';
const Landing = () => {
  return (
    <div >
      <Header/>
      <Article/>
      <Article  flexStyle={true}/>
      <Cards/>
    </div>
  );
}

 

export default Landing;