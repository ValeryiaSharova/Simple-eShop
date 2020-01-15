import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Public from './pages/Anonymous/Index';
import User from './pages/User/Index';
import Admin from './pages/Admin/Index';
import Table from './pages/Admin/TableOfUser';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Public} />
      <Route path="/user" exact component={User} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/table" exact component={Table} />
    </Switch>
  </BrowserRouter>
);

export default App;
