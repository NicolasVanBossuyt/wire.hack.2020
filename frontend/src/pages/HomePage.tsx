import * as React from 'react';

import { Snackbar, WithStyles, createStyles, withStyles } from '@material-ui/core';

import Header from '../components/Header';
import { subtitle, title } from '../constants/header';

const styles = () => createStyles({});

interface HomeProps extends WithStyles<typeof styles> {
  classes: any;
}

class Home extends React.Component<HomeProps> {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    console.log(event);
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Snackbar
          open={true}
          autoHideDuration={5000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            'Currently 85% of the Belgian population is infected, if you are among the remaining 15%, identify yourself without further delay!'
          }
        />
        <Header title={title} subtitle={subtitle} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
