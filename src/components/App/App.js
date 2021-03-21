
import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

//components
import Main from '../Main/Main';


function App() {



  return (

    <div className="page">
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>



  )
}

export default App;
