import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route>
      { () => props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" /> }
    </Route>
)}


export default withRouter(ProtectedRoute);
