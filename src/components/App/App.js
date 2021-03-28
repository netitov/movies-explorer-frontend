
import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

//components
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function App() {



  return (

    <div className="page">
      <Switch>
        <Route path="/">
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>



  )
}

export default App;
