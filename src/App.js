import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './sharedComponents/Header';
import Anon from './containers/anonPageContainer';
import User from './containers/userPageContainer';
import Admin from './containers/adminPageContainer';
import Table from './containers/tableContainer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Anon} />
      <Route path="/user" exact component={User} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/table" exact component={Table} />
    </Switch>
  </BrowserRouter>
);

export default App;
