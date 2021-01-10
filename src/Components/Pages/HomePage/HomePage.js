import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FeaturedProduct from '../../HomeComponent/FeaturedProduct'
import MainCategory from '../../HomeComponent/MainCategory'
import NewArrival from '../../HomeComponent/NewArrival'
import SpecialCollection from '../../HomeComponent/SpecialCollection'

const HomePage = () => {
    return (
        <>

            <Jumbotron className='animate__animated animate__fadeInDown'><h1>I am From Home Page </h1>
                <Link
                    className='btn btn-outline-success' to="/login">Login Page</Link>
            </Jumbotron>

            <FeaturedProduct />
            <NewArrival/>
            <SpecialCollection/>
            <MainCategory/>
        </>
    )
}

export default HomePage