import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './sharedComponents/Header/HeaderContainer';
import Table from './pages/Admin/TableContainer';
import Page from './pages/Index/IndexPageContainer';
import Account from './pages/User/UserAccontContainer';
import Cart from './pages/User/CartPageContainer';
import { ModalProvider } from './context/ModalContext';
import ModalRoot from './context/ModalRoot';
import PrivateRoute from './sharedComponents/PrivateRoute/PrivateRoute';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider>
        <ModalRoot />
        <Header />
        <Switch>
          <Route path="/" exact component={Page} />
          <PrivateRoute path="/account" exact component={Account} userRole="user" />
          <PrivateRoute path="/cart" exact component={Cart} userRole="user" />
          <PrivateRoute path="/table" exact component={Table} userRole="admin" />
        </Switch>
      </ModalProvider>
    </BrowserRouter>
  </Provider>
);
export default App;
