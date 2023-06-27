import React from 'react';
import Banner from './Banner';
import Category from './Category';
import DeliveryBanner from './DeliveryBanner';
import RecentAndDiscount from './RecentAndDiscount';
import Review from './Review';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <DeliveryBanner></DeliveryBanner>
            <Review></Review>
            <RecentAndDiscount></RecentAndDiscount>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;