import { connect } from 'react-redux';
import Table from '../pages/Admin/TableOfUser';
import * as actions from '../redux/actions/userAction';

const mapStateToProps = state => ({
  users: state.users.usersData,
});

export default connect(mapStateToProps, actions)(Table);
