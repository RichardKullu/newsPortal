import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Front = () => {
    return(
      <>
        <Header/>
        <Outlet/>
      </>
    );
  }

export default Front;