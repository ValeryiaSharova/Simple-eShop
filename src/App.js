import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './sharedComponents/Header/HeaderContainer';
import Table from './pages/Admin/TableContainer';
import Page from './pages/IndexPageContainer';
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
          <PrivateRoute path="/table" exact component={Table} />
        </Switch>
      </ModalProvider>
    </BrowserRouter>
  </Provider>
);
export default App;
