import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import ExclosiveDeals from '../ExclosiveDeals/ExclosiveDeals';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Banner></Banner>
            <ExclosiveDeals></ExclosiveDeals>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;