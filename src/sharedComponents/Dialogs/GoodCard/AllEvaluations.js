import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'proptypes';

const AllEvaluations = ({ rating, users, onRequestClose }) => (
  <Dialog open>
    <DialogTitle aria-labelledby="customized-dialog-title">All evaluations</DialogTitle>
    <DialogContent dividers>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User</TableCell>
              <TableCell align="center">Evaluation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rating.map(item => (
              <TableRow key={item.mail}>
                <TableCell align="center" component="th" scope="row">
                  {users.find(user => user.mail === item.mail).fname}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {item.ratingValue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DialogContent>
    <DialogActions>
      <Button onClick={onRequestClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);
AllEvaluations.propTypes = {
  rating: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default AllEvaluations;
