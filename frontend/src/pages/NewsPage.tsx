import * as React from 'react';

import {
  Badge,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';

import { deepOrange } from '@material-ui/core/colors';

/* import News from '../components/News'; */
import { posts } from '../constants/posts';
/* import { subtitle, title } from '../constants/header'; */

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const StyledBadgeOff = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#dc004e',
      color: '#dc004e',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
  }),
)(Badge);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minWidth: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      color: deepOrange[500],
      fontWeight: 500,
      display: 'inline',
    },
  });

interface HomeProps extends WithStyles<typeof styles> {
  classes: any;
}

class Home extends React.Component<HomeProps> {
  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        {posts.map((post: any, index: number) => (
          <div>
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                {post.online ? (
                  <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                  >
                    <Avatar alt={post.author} src={post.avatar} />
                  </StyledBadge>
                ) : (
                    <StyledBadgeOff
                      overlap="circle"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                    >
                      <Avatar alt={post.author} src={post.avatar} />
                    </StyledBadgeOff>
                  )}
              </ListItemAvatar>
              <ListItemText
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {post.location}
                    </Typography>
                    {post.content}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(Home);
