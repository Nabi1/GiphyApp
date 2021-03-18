import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import HomeContainer from './components/Home/Home.container';
import Favorites from './components/Favorites/Favorites';
import './App.css';
import Navigation from './components/shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container maxWidth="lg" style={{ minHeight: '50em' }}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
