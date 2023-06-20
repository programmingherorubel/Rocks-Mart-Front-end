import React from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import CustomNavbar from '../Share/CustomNavbar';

const Main = () => {
    return (
        <>
        <CustomNavbar />
            <Outlet></Outlet> 
        </>
    );
};

export default Main;