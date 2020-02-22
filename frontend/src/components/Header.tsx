import * as React from 'react';
import {
  Container,
  Fade,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';
import { deepPurple, grey } from '@material-ui/core/colors';
import Locker from './Locker';

const styles = () =>
  createStyles({
    mainTitle: {
      color: deepPurple[900],
      fontWeight: 500,
      textShadow: `2px 2px ${grey[300]}`,
    },
    root: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(' + require('../assets/img/background.jpg') + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    subtitle: {
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
  subtitle: JSX.Element;
  title: string;
}

class Header extends React.Component<HeaderProps> {
  render() {
    const { classes, subtitle, title } = this.props;
    return (
      <div className={classes.root}>
        <Fade in={true} timeout={1000}>
          <div className={classes.teaser}>
            <Typography
              align="center"
              className={classes.mainTitle}
              component="h1"
              gutterBottom
              variant="h1"
            >
              {title}
            </Typography>
            <Container maxWidth="md" className={classes.main}>
              <Typography className={classes.subtitle} component="h2" variant="h2">
                {subtitle}
              </Typography>
            </Container>
            <Locker />
          </div>
        </Fade>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
