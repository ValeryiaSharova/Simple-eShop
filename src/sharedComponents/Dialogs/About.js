import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'proptypes';

const About = ({ onRequestClose }) => (
  <Dialog open>
    <DialogTitle aria-labelledby="customized-dialog-title">About</DialogTitle>
    <DialogContent dividers>
      <Typography gutterBottom>
        Welcome to my store bgShop. I sell board games. Here you will find a variety of board games
        for every taste, new gamse and also time-tested games - all at low prices! In my store I try
        to collect the most interesting board games for our customers. Games that thousands of
        people around the world enjoy playing.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onRequestClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

About.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
};

export default About;
