import React from 'react'
import FeaturedProduct from '../../HomeComponent/FeaturedProduct'
import HomeTop from '../../HomeComponent/HomeTop'
import MainCategory from '../../HomeComponent/MainCategory'
import NewArrival from '../../HomeComponent/NewArrival'
import SpecialCollection from '../../HomeComponent/SpecialCollection'
import Footer from '../../Shared/Footer/Footer'
import NavMenu from '../../Shared/NavMenu'

const HomePage = () => {
    return (
        <>
            <NavMenu/>
            <HomeTop/>
            <FeaturedProduct />
            <NewArrival/>
            <SpecialCollection/>
            <MainCategory/>
            <Footer/>
        </>
    )
}

export default HomePage