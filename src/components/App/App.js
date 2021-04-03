
import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

//components
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';


function App() {



  return (

    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
      <Footer />
    </div>



  )
}

export default App;
