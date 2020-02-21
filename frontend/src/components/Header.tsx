import * as React from 'react';
import { Fade, Theme, Typography, WithStyles, createStyles, withStyles } from '@material-ui/core';
import { cyan, grey } from '@material-ui/core/colors';

const styles = (theme: Theme) =>
  createStyles({
    mainTitle: {
      color: cyan[300],
      fontWeight: 500,
      textShadow: `2px 2px ${grey[700]}`,
    },
    root: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing(8),
      /* backgroundImage: 'url(' + require('../assets/img/background.jpg') + ')', */
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    secondaryTitle: {
      width: '50%',
      color: grey[900],
      fontWeight: 500,
      textShadow: `1px 1px ${grey[300]}`,
    },
    teaser: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  classes: any;
  title: string;
}

class Header extends React.Component<HeaderProps> {
  render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.root}>
        <Fade in={true} timeout={1000}>
          <div className={classes.teaser}>
            <Typography
              align="center"
              className={classes.mainTitle}
              component="h1"
              gutterBottom
              variant="h3"
            >
              {title}
            </Typography>
          </div>
        </Fade>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
