import { connect } from 'react-redux';
import Header from '../sharedComponents/Header';
import * as actions from '../redux/actions/userAction';

const mapStateToProps = state => ({
  users: state.users.usersData,
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps, actions)(Header);
