import { connect } from 'react-redux';
import Table from '../pages/Admin/TableOfUser';

const mapStateToProps = state => ({
  users: state.users.usersData,
});

export default connect(mapStateToProps)(Table);
