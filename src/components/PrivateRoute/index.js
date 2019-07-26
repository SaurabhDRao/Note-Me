import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route 
            render={(props) => 
                (authenticated ? <Component {...props} /> : <Redirect to="/" />)
            } {...rest} />
    );
};
export default PrivateRoute;