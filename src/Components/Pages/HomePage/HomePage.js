import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import FeaturedProduct from '../../HomeComponent/FeaturedProduct'
import HomeTop from '../../HomeComponent/HomeTop'
import MainCategory from '../../HomeComponent/MainCategory'
import NewArrival from '../../HomeComponent/NewArrival'
import SpecialCollection from '../../HomeComponent/SpecialCollection'

const HomePage = () => {
    return (
        <>
            <Jumbotron className='text-center'><h1>This is Home Page</h1></Jumbotron>
            <HomeTop/>
            <FeaturedProduct />
            <NewArrival/>
            <SpecialCollection/>
            <MainCategory/>
        </>
    )
}

export default HomePage