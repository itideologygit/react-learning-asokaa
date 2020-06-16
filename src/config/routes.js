import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Login from '../View/Login/LoginView'
import Sample from '../View/Sample/Sample'

export default function Routes() {
    return (
        <Router>
            <Switch>
            <Route exact path='/' >
                <Login />
            </Route>
            <Route exact path='/sample' >
                <Sample />
            </Route>
            <Route exact path='*' >
                <div>
                    <h1> No page...!</h1>
                </div>
            </Route>
            </Switch>
        </Router>
    )
}