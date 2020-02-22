import * as React from 'react';
import {
  Container,
  Fade,
  Theme,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';
import { pink, grey } from '@material-ui/core/colors';
import SecureSlider from './SecureSlider';

const styles = (theme: Theme) =>
  createStyles({
    mainTitle: {
      color: '#f2f2f2',
      background: pink[500],
      fontSize: '75px',
      lineHeight: '74px',
      fontWeight: 700,
      margin: '0 5px 24px',
      float: 'left',
      padding: '10px',
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
      marginBottom: theme.spacing(8),
      fontWeight: 500,
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
        <Fade in={true} timeout={3000}>
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
            <SecureSlider />
          </div>
        </Fade>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
