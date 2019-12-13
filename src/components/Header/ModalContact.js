import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";

class Contact extends Component {
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
          Contact
        </button>
        <Dialog
          open={this.state.open}
          onBackdropClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          <DialogTitle aria-labelledby="customized-dialog-title">
            Contact
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>Developed by Valeryia Sharova</Typography>
            <Typography gutterBottom>E-mail: gominzyplay@gmail.com</Typography>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </li>
    );
  }
}

export default Contact;
