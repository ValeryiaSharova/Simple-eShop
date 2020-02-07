import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';
import Login from '../../Header/Login';
import Registration from '../../Header/Registration';
import TabPanel from './TabPanel';

const LoginOrRegister = ({ onRequestClose, addUser, login }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Dialog open>
      <DialogContent dividers>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Register" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Login login={login} onRequestClose={onRequestClose} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Registration addUser={addUser} onRequestClose={onRequestClose} />
        </TabPanel>
      </DialogContent>
      <DialogActions>
        <Button onClick={onRequestClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

LoginOrRegister.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default LoginOrRegister;
