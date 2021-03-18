import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import logo from '../../../logo.svg';
import Styles from './Navigation.styles';

function Navigation() {
  return (
    <AppBar position="static">
      <Styles.Toolbar>
        <img src={logo} className="App-logo" alt="logo" />
        <Styles.Link to="/">
          <Styles.Typography variant="overline">Home</Styles.Typography>
        </Styles.Link>
        <Styles.Link to="/favorites">
          <Styles.Typography variant="overline">Favorites</Styles.Typography>
        </Styles.Link>
      </Styles.Toolbar>
    </AppBar>
  );
}

export default Navigation;
