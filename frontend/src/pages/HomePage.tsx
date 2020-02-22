import * as React from 'react';

import { WithStyles, createStyles, withStyles } from '@material-ui/core';

import Header from '../components/Header';
import { subtitle, title } from '../constants/header';

const styles = () => createStyles({});

interface HomeProps extends WithStyles<typeof styles> {
  classes: any;
}

class Home extends React.Component<HomeProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header title={title} subtitle={subtitle} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
