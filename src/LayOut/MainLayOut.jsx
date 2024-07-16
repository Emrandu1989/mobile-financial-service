import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayOut = () => {
    return (
        <div className='text-center my-12'>
             <NavBar />
             <Outlet />
        </div>
    );
};

export default MainLayOut;