import * as React from 'react';

import { WithStyles, createStyles, withStyles } from '@material-ui/core';

const styles = () => createStyles({});

interface HomeProps extends WithStyles<typeof styles> {
  classes: any;
}

class Home extends React.Component<HomeProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <p>zCaptcha</p>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
