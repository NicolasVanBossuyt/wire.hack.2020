import * as React from 'react';
import {
  Paper,
  Slider,
  Theme,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const styles = (theme: Theme) =>
  createStyles({
    card: {
      padding: theme.spacing(2),
      margin: theme.spacing(2, 0),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(2),
      },
    },
    title: {
      color: grey[900],
      fontWeight: 500,
      fontSize: 20,
    },
  });

interface LockerProps extends WithStyles<typeof styles> {
  classes: any;
}

function valuetext(value: number) {
  console.log(value);
  return `${value}°C`;
}

class Locker extends React.Component<LockerProps> {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.card}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          I'm not a brain eating bastard
        </Typography>
        <Slider
          defaultValue={1}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          className={classes.slider}
          step={1}
          scale={() => 20}
          marks
          min={1}
          max={10}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Locker);
