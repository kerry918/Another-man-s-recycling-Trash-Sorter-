import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"; 
import LandingPage from './components/LandingPage/LandingPage'; 


function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/landingPage" />
        <Route exact path="/landingpage" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
