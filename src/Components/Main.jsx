import React from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import CustomNavbar from '../Share/CustomNavbar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';


const Main = () => {
    return (
        <>
        <CustomNavbar />
            <Outlet></Outlet> 
        <Footer/>
        <ToastContainer />
        </>
    );
};

export default Main;