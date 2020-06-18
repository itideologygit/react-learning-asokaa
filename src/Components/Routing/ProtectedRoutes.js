import React from 'react';
import { Route, Redirect } from "react-router-dom";

import Auth from '../../services/auth';


// Create a PrivateRoute function with params component
// conditional 
{/* <statement> ? if true exe this portion : if false exe this portion */}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.isAuth() 
            ? ( <Component {...props} /> )
            : ( <Redirect to={{ pathname: "/" }} /> )
        }
    />
);

export default PrivateRoute