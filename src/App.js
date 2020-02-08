import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './sharedComponents/Header/HeaderContainer';
import Table from './pages/Admin/TableContainer';
import Page from './pages/IndexPageContainer';
import Account from './pages/User/UserAccontContainer';
import Cart from './pages/User/CartPageContainer';
import { ModalProvider } from './context/ModalContext';
import ModalRoot from './context/ModalRoot';
import PrivateRouteAdmin from './sharedComponents/PrivateRoute/PrivateRouteAdmin';
import PrivateRouteUser from './sharedComponents/PrivateRoute/PrivateRouteUser';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider>
        <ModalRoot />
        <Header />
        <Switch>
          <Route path="/" exact component={Page} />
          <PrivateRouteUser path="/account" exact component={Account} />
          <PrivateRouteUser path="/cart" exact component={Cart} />
          <PrivateRouteAdmin path="/table" exact component={Table} />
        </Switch>
      </ModalProvider>
    </BrowserRouter>
  </Provider>
);
export default App;
