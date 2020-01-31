import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './containers/headerContainer';
import Table from './containers/tableContainer';
import Page from './containers/indexPageContainer';
import { ModalProvider } from './context/ModalContext';
import ModalRoot from './context/ModalRoot';

const App = () => {
  const currentUserState = useSelector(state => state.users.currentUser);
  return (
    <BrowserRouter>
      <ModalProvider>
        <ModalRoot />
        <Header />
        <Switch>
          {!currentUserState.isAuth ? (
            <div>
              <Route path="/page" exact component={Page} />
              <Redirect to="/page" />
            </div>
          ) : (
            <div>
              {currentUserState.role === 'admin' ? (
                <div>
                  <Route path="/page" exact component={Page} />
                  <Route path="/table" exact component={Table} />
                  <Redirect to="/page" />
                </div>
              ) : (
                <div>
                  <Route path="/page" exact component={Page} />
                  <Redirect to="/page" />
                </div>
              )}
            </div>
          )}
        </Switch>
      </ModalProvider>
    </BrowserRouter>
  );
};
export default App;
