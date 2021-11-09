import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Header } from '../../components/header';
import { Carousel } from './carousel';

export default function Home(props) {
  return (
    <>
      <Header />
      <Carousel />
    </>
  );
}
