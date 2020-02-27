import { connect } from 'react-redux';
import Login from './Login';
import * as actions from '../../redux/actions/userAction';

const mapStateToProps = state => ({
  loginErrorFlag: state.users.loginErrorFlag,
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps, actions)(Login);
