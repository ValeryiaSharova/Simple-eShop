import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <li className="nav-item">
        <button
          type="button"
          className="btn btn-nav mt-1"
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          About
        </button>
        <Dialog
          open={this.state.open}
          onBackdropClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          <DialogTitle aria-labelledby="customized-dialog-title">
            About
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Welcome to my store "bgShop". I sell board games. Here you will
              find a variety of board games for every taste, new gamse and also
              time-tested games - all at low prices! In my store I try to
              collect the most interesting board games for our customers. Games
              that thousands of people around the world enjoy playing.
            </Typography>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </li>
    );
  }
}

export default About;
