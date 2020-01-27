import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';

const Contact = ({ onRequestClose, show }) => (
  <Dialog open={show}>
    <DialogTitle aria-labelledby="customized-dialog-title">Contact</DialogTitle>
    <DialogContent dividers>
      <Typography gutterBottom>Developed by Valeryia Sharova</Typography>
      <Typography gutterBottom>E-mail: gominzyplay@gmail.com</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onRequestClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

Contact.propTypes = {
  show: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Contact;
