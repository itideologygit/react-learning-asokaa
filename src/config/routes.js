import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Login from '../View/Login/LoginView'
import Sample from '../View/Sample/Sample'

import ProtectedRoute from '../Components/Routing/ProtectedRoutes'

export default function Routes() {
    return (
        <Router>
            <Switch>
            <Route exact path='/' component={Login} />
            <ProtectedRoute exact path='/sample' component={Sample} />
            <Route exact path='*' >
                <div>
                    <h1> No page...!</h1>
                </div>
            </Route>
            </Switch>
        </Router>
    )
}