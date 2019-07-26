import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const LandingRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route 
            render={(props) => 
                (authenticated ? <Redirect to="/noteme" /> : <Component {...props} />)
            } {...rest} />
    );
};
export default LandingRoute;