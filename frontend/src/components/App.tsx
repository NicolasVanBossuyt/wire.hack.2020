import * as React from 'react';
import { Router } from 'react-router-dom';
import {
  CssBaseline,
  MuiThemeProvider,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';

import RouteHandler from '../routes/RouteHandler';
import history from '../services/history';
import theme from '../theme';

const styles = () =>
  createStyles({
    layout: {
      /* marginBottom: theme.spacing(2), */
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  });

interface AppProps extends WithStyles<typeof styles> {
  classes: any;
}

class App extends React.Component<AppProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router history={history}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <main className={classes.layout}>
              <RouteHandler />
            </main>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
