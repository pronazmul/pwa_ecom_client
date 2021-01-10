import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom"
import { AnimatedSwitch } from 'react-router-transition'

import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage'


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
                    <LoginPage/>
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