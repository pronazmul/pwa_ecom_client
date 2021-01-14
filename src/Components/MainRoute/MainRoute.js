import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom"
import { AnimatedSwitch } from 'react-router-transition'
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage'
import ContractPage from '../Pages/ContractPage/ContractPage'

import HomePage from '../Pages/HomePage/HomePage'
import PurchasePage from '../Pages/PurchasePage/PurchasePage'
import ReturnPage from '../Pages/ReturnPage/ReturnPage'
import PrivacyPage from '../Pages/PrivacyPage/PrivacyPage'
import UserOnBoardPage from '../Pages/UserOnBoardPage/UserOnBoardPage'
import ProductDetails from '../Pages/ProductDetails/ProductDetails'


const MainRoute = () => {
    return (
        <Router>
            <AnimatedSwitch
                atEnter={{ opacity: 1.5 }}
                atLeave={{ opacity:  1.5 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route path='/login'>
                    <UserOnBoardPage/>
                </Route>

                <Route path='/contract'>
                    <ContractPage/>
                </Route>

                <Route path='/about'>
                    <AboutUsPage/>
                </Route>

                <Route path='/purchase'>
                    <PurchasePage/>
                </Route>

                <Route path='/return'>
                    <ReturnPage/>
                </Route>

                <Route path='/privacy'>
                    <PrivacyPage/>
                </Route>

                <Route path='/details'>
                    <ProductDetails/>
                </Route>

                {/* <ProtectedRoute path='/dashboard/:key?'>
                    <Dashboard></Dashboard>
                </ProtectedRoute> */}

                <Route path='*'>
                    <Redirect to="/" />
                </Route>
            </Switch>
            </AnimatedSwitch>
        </Router >
    )
}

export default MainRoute