import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from './IndexPage';
import * as actionsGood from '../redux/actions/goodsAction';
import * as actionsUser from '../redux/actions/userAction';

const mapStateToProps = state => ({
  goods: state.goods.goodsData,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = dispatch => {
  const { deleteGood, addGood, editGood, loadGoods, addToCart } = bindActionCreators(
    actionsGood,
    dispatch
  );
  const { loadUsers } = bindActionCreators(actionsUser, dispatch);

  return { deleteGood, addGood, editGood, loadGoods, loadUsers, addToCart };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
