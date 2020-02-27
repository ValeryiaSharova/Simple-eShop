import { connect } from 'react-redux';
import Registration from './Registration';
import * as actions from '../../redux/actions/userAction';

const mapStateToProps = state => ({
  registrationErrorFlag: state.users.registrationErrorFlag,
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps, actions)(Registration);
