import { connect } from 'react-redux';
import Page from './UserAccount';
import * as action from '../../redux/actions/userAction';

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps, action)(Page);
