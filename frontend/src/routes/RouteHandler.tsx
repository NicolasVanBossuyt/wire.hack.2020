import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ChatPage from '../pages/ChatPage';

export default class RouteHandler extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    );
  }
}
