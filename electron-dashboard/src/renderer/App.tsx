import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'renderer/containers/Login';
import HomePage from './containers/HomePage';

import 'renderer/App.global.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props { }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface State { }

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;