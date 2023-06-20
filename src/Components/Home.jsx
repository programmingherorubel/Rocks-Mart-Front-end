import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
        </>
    );
};

export default Home;