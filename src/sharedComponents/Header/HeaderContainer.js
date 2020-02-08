import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../../redux/actions/userAction';

const mapStateToProps = state => ({
  users: state.users.usersData,
  currentUser: state.users.currentUser,
  cart: state.goods.cart,
});

export default connect(mapStateToProps, actions)(Header);
