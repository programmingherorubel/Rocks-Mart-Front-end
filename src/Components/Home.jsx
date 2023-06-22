import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Category from './Category';
import DeliveryBanner from './DeliveryBanner';
import Review from './Review';
import RecentAndDiscount from './RecentAndDiscount';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <DeliveryBanner></DeliveryBanner>
            <Review></Review>
            <RecentAndDiscount></RecentAndDiscount>
        </>
    );
};

export default Home;